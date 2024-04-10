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

const { SNSClient, CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns");

const updateDeviceArn = async (userId, arn) => {
  const query = `mutation UpdateUserDeviceArn($id: ID!, $arn: String!) {
     updateUserDevice(input: {id: $id, arn: $arn}) { 
      id 
    }
   }`;

  const variables = { id: userId, arn: arn };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };
  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    console.log('response', response.data);
  } catch (error) {
    console.log('error', error);
  }
};

const registerEndpoint = async (token) => {
  var params = {
    PlatformApplicationArn: process.env.SNS_PLATFORM_APPLICATION_ARN,
    Token: token
  };

  const client = new SNSClient({ region: process.env.REGION });
  const command = new CreatePlatformEndpointCommand(params);

  try {
    const response = await client.send(command);
    const arn = response.EndpointArn;
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
        const token = record.dynamodb.NewImage.token['S'];
        const deviceId = record.dynamodb.NewImage.id['S'];
        console.log('register token', token);

        const arn = await registerEndpoint(token);
        console.log('register arn', arn);
        await updateDeviceArn(deviceId, arn);
      }
      else {
        console.log('User device is already registered')
      }
    } catch (err) {
      console.log('Missing parameters', err);
      return Promise.resolve('Missing parameters');
    }
  }
  return Promise.resolve('complete');
};
