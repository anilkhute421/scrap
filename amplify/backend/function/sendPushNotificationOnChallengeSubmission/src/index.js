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

const getAdminUsers = async () => {

  const query = `query listUsers($filter: ModelUserFilterInput){
    listUsers(filter: $filter){
      items{
        id
        firstName
        role
        }
      }
  }`;

  const variables = { filter: { role: { contains: 'ADMIN' } } };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.listUsers.items;
  } catch (error) {
    console.log('getAdminUsers error', error);
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
      if (record.eventName === 'MODIFY' && record.dynamodb.NewImage.status['S'] === 'SUBMITTED') {

        const studentId = record.dynamodb.NewImage.studentId['S'];
        const groupId = record.dynamodb.NewImage.groupId['S'];
        const challengeId = record.dynamodb.NewImage.challengeId['S'];

        const challenge = await getChallengeById(challengeId);

        const users = await getAdminUsers();

        for (obj of users) {
          console.log('user id', obj.id)

          const notification = {
            userId: obj.id,
            senderId: '',
            title: 'Challenge Submission',
            message: `Uploaded a work under ${challenge.name}`,
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
