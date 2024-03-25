import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  watch: true,
  overwrite: true,
  schema: [
    {
      [`https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}\?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`]:
        {
          headers: {
            access_token: `${process.env.CONTENTSTACK_DELIVERY_TOKEN}`,
          },
        },
    },
  ],
  ignoreNoDocuments: true,
  documents: [
    "app/**/*.{graphql,js,ts,jsx,tsx}",
    "components/**/*.{graphql,js,ts,jsx,tsx}",
    "lib/**/*.{graphql,js,ts,jsx,tsx}",
  ],
  generates: {
    "./gql/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
