import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  watch: true,
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  ignoreNoDocuments: true,
  documents: [
    "app/**/*.{graphql,js,ts,jsx,tsx}",
    "ui/**/*.{graphql,js,ts,jsx,tsx}",
  ],
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
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
