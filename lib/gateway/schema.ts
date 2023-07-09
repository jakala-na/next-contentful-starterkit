import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { stitchSchemas } from "@graphql-tools/stitch";
import { schemaFromExecutor, wrapSchema } from "@graphql-tools/wrap";
import { OperationTypeNode } from "graphql";
import { ArgumentLimitTransformer, SlugFieldTransformer } from "./transformers";
import { delegateToSchema } from "@graphql-tools/delegate";

const getSchema = async () => {
  const executor = buildHTTPExecutor({
    endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`,
    },
  });

  const contentfulSchema = await schemaFromExecutor(executor);

  const contentfulSubshema = {
    schema: contentfulSchema,
    executor,
    transforms: [new ArgumentLimitTransformer(contentfulSchema)],
  };

  const schema = stitchSchemas({
    subschemas: [contentfulSubshema],
    typeDefs: /* GraphQL */ `
      interface PageEntry {
        slug: String
      }
      # extend type Page implements PageEntry {
      #   id: ID!
      # }
      # extend type Article implements PageEntry {
      #   id: ID!
      # }
      extend type Query {
        pageBySlug(slug: String!): PageEntry
      }
    `,
    resolvers: {
      Query: {
        pageBySlug(parent, { slug }, context, info) {
          const { type, id } =
            slug === "/123"
              ? { type: "Article", id: "4RXli9HlKUjhqRlZxuS0JV" }
              : { type: "Page", id: "5FRqxevmVGFgo7IGlAhj8Z" };
          let fieldName;
          if (type === "Article") {
            fieldName = "article";
          } else if (type === "Page") {
            fieldName = "page";
          } else {
            throw new Error("Invalid global id");
          }
          return delegateToSchema({
            schema: contentfulSubshema,
            operation: OperationTypeNode.QUERY,
            fieldName,
            args: { id: id },
            context,
            info,
          });
        },
      },
      PageEntry: {
        __resolveType(parent) {
          return parent.__typename;
        },
      },
    },
  });

  const transformedSchema = wrapSchema({
    schema,
    transforms: [new SlugFieldTransformer()],
  });

  return transformedSchema;
};

export default getSchema;
