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

const getGroupById = async (id) => {
  const query = `query ListGroups($filter: ModelGroupFilterInput){
    listGroups(filter: $filter){
      items{
        id
        name
        owner{
          id
        }
      }
    }
  }`;

  const variables = { filter: { id: { eq: id } } };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.listGroups.items[0];
  } catch (error) {
    console.log('getGroupById error', error);
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
      if (record.eventName === 'INSERT') {

        const studentId = record.dynamodb.NewImage.studentId['S'];
        const groupId = record.dynamodb.NewImage.groupId['S'];

        const student = await getStudentById(studentId);
        const group = await getGroupById(groupId);

        if (student && group) {

          const notification = {
            userId: student.user.id,
            senderId: group.owner.id,
            title: student.firstName,
            message: `You have been added to ${group.name}`,
            type: 'ACTIVITY',
            typeId: record.dynamodb.NewImage.id['S'],
            sent: false,
            read: false
          }

          await createNotification(notification)
        }
        else {
          console.log('Ignore notification because no student added to group')
        }
      } else {
        console.log('Ignore student notify')
      }
    } catch (err) {
      console.log('Misssing Parameters',err);
      return Promise.resolve('Error');
    }
  }
  return Promise.resolve('function processed successfully');
};