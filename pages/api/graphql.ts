import { createGraphQLHandler } from "next-graphql-server";
import { NextApiRequest, NextApiResponse } from "next";
import getSchema from "#/lib/gateway/schema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return createGraphQLHandler(await getSchema())(req, res);
};  

export default handler;
