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
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const getUserDevices = async (userId) => {
  const query = `
    query GetUserDevicesByUserId($userId: ID!) {
      userDevicesByUserId(userId: $userId) {
        items {
          id
          arn
        }
      }
    }  
  `;

  const variables = { userId: userId };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.userDevicesByUserId.items;
  } catch (error) {
    console.log('getUserById error', error);
  }
}

const sendPushNotification = async (deviceArn, senderId, title, message, type, typeId) => {
  var params = {
    TargetArn: deviceArn,
    MessageStructure: 'json',
    Message: JSON.stringify({
      "GCM": JSON.stringify({
        "notification": {
          "title": title,
          "body": message,
          "sound": "default"
        }, "priority": "high",
        "content_available": true,
        "data": {
          "senderId": senderId,
          "type": type,
          "id": typeId
        }
      })
    })
  };

  try {
    const client = new SNSClient({ region: process.env.REGION });
    const command = new PublishCommand(params);
    const response = await client.send(command);

    const arn = response.EndpointArn
    return arn;
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
        const userId = record.dynamodb.NewImage.userId['S'];
        const title = record.dynamodb.NewImage.title ? record.dynamodb.NewImage.title['S'] : 'Scrappy App';
        const message = record.dynamodb.NewImage.message['S'];
        const type = record.dynamodb.NewImage.type['S'];
        const typeId = record.dynamodb.NewImage.typeId['S'];
        const senderId = record.dynamodb.NewImage.senderId['S'];

        const userDevices = await getUserDevices(userId)
        
        for (let i in userDevices) {
          const device = userDevices[i]
          const deviceArn = device.arn;

          await sendPushNotification(deviceArn, senderId, title, message, type, typeId)
        }
      }
    } catch (err) {
      console.log('Missing parameters', err);
      return Promise.resolve('Missing parameters');
    }
  }

  return Promise.resolve('complete');
};