import { json } from "@remix-run/node";

import { Page } from "@shopify/polaris";

import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  return json({});
};

export default function Index() {
  return <Page>Thi si a heading.</Page>;
}
