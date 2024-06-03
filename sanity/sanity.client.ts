import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from '@sanity/client';

const config: ClientConfig = {
  projectId: 'ksfm5l7t',
  dataset: 'production',
  apiVersion: '2023-07-16',
  token: process.env.NEXT_PUBLIC_SANITY_EDITOR_API_TOKEN,
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
    cache: 'force-cache',
    next: { tags },
  });
}
