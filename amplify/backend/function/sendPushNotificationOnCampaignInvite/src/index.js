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

const getCampaignById = async (id) => {
  const query = `query ListCampaigns($filter: ModelCampaignFilterInput){
    listCampaigns(filter: $filter){
      items{
        id
        name
        student{
          id
          user{
            id
          }
        }
      }
    }
  }`;

  const variables = { filter: { id: { eq: id } } };
  const headers = { headers: { 'x-api-key': GRAPHQL_API_KEY } };

  try {
    const response = await Axios.post(GRAPHQL_ENDPOINT, JSON.stringify({ query, variables }), headers);
    return response.data.data.listCampaigns.items[0];
  } catch (error) {
    console.log('getCampaignById error', error);
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
        const campaignId = record.dynamodb.NewImage.campaignId['S'];
        const campaign = await getCampaignById(campaignId);

        if (campaign) {

          const notification = {
            userId: record.dynamodb.NewImage.studentId['S'],
            senderId: campaign.student.user.id,
            title: campaign.name,
            message: `Your have been Invited to Campaign.`,
            type: 'ACTIVITY',
            typeId: record.dynamodb.NewImage.id['S'],
            sent: false,
            read: false
          }

          await createNotification(notification);

        } else {
          console.log('Ignore notification because no campaign')
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