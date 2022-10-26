import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = sanityClient({
  projectId: "7yia6el5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client