import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  watch: true,
  overwrite: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`,
          },
        },
    },
  ],
  ignoreNoDocuments: true,
  documents: [
    "app/**/*.{graphql,js,ts,jsx,tsx}",
    "components/**/*.{graphql,js,ts,jsx,tsx}",
  ],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
        dedupeFragments: true,
      },
    },
    "./gql/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
