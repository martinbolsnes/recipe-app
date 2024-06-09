import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from '@sanity/client';

const config: ClientConfig = {
  projectId: 'ksfm5l7t',
  dataset: 'production',
  apiVersion: '2023-07-16',
  token: process.env.SANITY_EDITOR_API_TOKEN,
  useCdn: true,
};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-cache' : 'default',
    next: { tags, revalidate: 30 },
  });
}
