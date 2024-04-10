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
      if (record.eventName === 'INSERT') {
        const groupName = record.dynamodb.NewImage.name['S'];
        const groupOwnerId = record.dynamodb.NewImage.groupOwnerId['S'];

        const users = await getAdminUsers();
        console.log('users', users);

        if (users) {
          for (obj of users) {
            const notification = {
              userId: obj.id,
              senderId: groupOwnerId,
              title: 'Team Created',
              message: `Created a team name ${groupName}`,
              type: 'ACTIVITY',
              typeId: record.dynamodb.NewImage.id['S'],
              sent: false,
              read: false
            }

            await createNotification(notification);
          }
        }
        else {
          console.log('Ignore notify because no users');
        }

      } else {
        console.log('Ignore Notify');
      }
    } catch (err) {
      console.log('Missing parameters', err);
      return Promise.resolve('Missing parameters');
    }
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};
