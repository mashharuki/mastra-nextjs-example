import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import { google } from '@ai-sdk/google';

// Gemini Model
export const gemini = google('gemini-2.0-flash');

// create Amazon Bedrock client
const bedrock = createAmazonBedrock({
  apiKey: process.env.AMAZOM_BEDROCK_API_KEY || '',
  region: 'ap-northeast-1'
});
export const bedrockModel = bedrock('amazon.nova-lite-v1:0');