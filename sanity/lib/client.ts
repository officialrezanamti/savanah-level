import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});

// Client with a token for draft/preview reads, if ever needed server-side.
export const tokenClient = token
  ? client.withConfig({ token, useCdn: false, perspective: "previewDrafts" })
  : client;
