import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const {
  REACT_APP_SANITY_PROJECT_ID,
  REACT_APP_SANITY_DATASET,
  REACT_APP_SANITY_API_TOKEN,
} = process.env;

console.log(REACT_APP_SANITY_DATASET);

export const client = sanityClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: `${REACT_APP_SANITY_DATASET}`,
  apiVersion: '2022-02-01',
  useCdn: true,
  token: REACT_APP_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
