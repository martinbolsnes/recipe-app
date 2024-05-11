import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'ksfm5l7t',
  dataset: 'production',
  apiVersion: '2023-07-16',
  token: process.env.SANITY_EDITOR_API_TOKEN,
  useCdn: true,
};

const client = createClient(config);

export default client;
