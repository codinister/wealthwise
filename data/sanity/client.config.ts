import { createClient } from 'next-sanity';

const client = createClient({
  dataset: 'production',
  projectId: process.env.NEXT_SANITY_CLIENT,
  apiVersion: '2025-02-05',
  useCdn: true,
});

export default client;
