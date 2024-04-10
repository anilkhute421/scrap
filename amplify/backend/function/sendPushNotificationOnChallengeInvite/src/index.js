/* Amplify Params - DO NOT EDIT
  API_SCRAPPY_GRAPHQLAPIENDPOINTOUTPUT
  API_SCRAPPY_GRAPHQLAPIIDOUTPUT
  API_SCRAPPY_GRAPHQLAPIKEYOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

const GRAPHQL_ENDPOINT = process.env.API_SCRAPPY_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_SCRAPPY_GRAPHQLAPIKEYOUTPUT;

const Axios = require("axios");

const getStudentById = async (id) => {
  const query = `query ListStudents($filter: ModelStudentFilterInput){
    listStudents(filter: $filter){
      items{
        id
        firstName
        lastName
        user{
          id
        }
      }
    }
  }`;

  const variables = { filter: { id: { eq: id } } };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.listStudents.items[0];
  } catch (error) {
    console.log('getStudentById error', error);
  }

}

const getChallengeById = async (id) => {
  const query = `query GetChallenge($id:ID!){
    getChallenge(id:$id){
        id
        name
    }
  }`;

  const variables = { id: id };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.getChallenge;
  } catch (error) {
    console.log('getChallengeById error', error);
  }

}

const getGroupMembersByGroupId = async (groupId) => {
  console.log('id', groupId);

  const query = `query listGroupMembers($filter: ModelGroupMemberFilterInput){
    listGroupMembers(filter: $filter){
      items{
        id
        studentId
        student{
          id
          user{
            id
          }
        }
        }
      }
  }`;

  const variables = { filter: { groupId: { eq: groupId } } };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.listGroupMembers.items;
  } catch (error) {
    console.log('getGroupMembersByGroupId error', error);
  }
}

const createNotification = async (notification) => {
  const query = `mutation CreateNotification($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
    }
  }`;

  const variables = { input: notification }
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } }

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers)
    console.log('createNotification', response.data)
  } catch (error) {
    console.log('error', error)
  }
}

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);

    try {
      if (record.eventName === 'INSERT' && record.dynamodb.NewImage.status['S'] === "INVITED") {

        const studentId = record.dynamodb.NewImage.studentId['S'];
        const groupId = record.dynamodb.NewImage.groupId['S'];
        const challengeId = record.dynamodb.NewImage.challengeId['S'];
        const userId = record.dynamodb.NewImage.invitedByStudentId['S']

        const student = await getStudentById(studentId);
        const groupMembers = await getGroupMembersByGroupId(groupId);
        const challenge = await getChallengeById(challengeId);
        const invitedByUser = await getStudentById(userId);

        for (member of groupMembers) {
          console.log('groupMember', member.student.user.id)

          const notification = {
            userId: member.student.user.id,
            senderId: invitedByUser.user.id,
            title: 'Challenge Invitation',
            message: `${student.firstName} has challenged you to complete ${challenge.name}`,
            type: 'ACTIVITY',
            typeId: record.dynamodb.NewImage.id['S'],
            sent: false,
            read: false
          }

          await createNotification(notification);
        }
      } else {
        console.log('Ignore student notify')
      }
    } catch (err) {
      console.log('Missing parameters', err);
      return Promise.resolve('Missing parameters');
    }
  }
  return Promise.resolve('function processed successfully');
};