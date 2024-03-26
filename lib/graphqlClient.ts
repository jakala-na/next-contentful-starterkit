import { TadaDocumentNode } from 'gql.tada';
import { DocumentNode, print } from 'graphql';



const constructGraphQLEndpoint = (query: DocumentNode, variables: any, operationName?: string): string => {
  const baseUrl = `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}`;
  const environment = process.env.CONTENTSTACK_ENVIRONMENT || 'production';

  const params = new URLSearchParams({
    environment: environment,
    query: encodeURIComponent(print(query)),
    variables: encodeURIComponent(JSON.stringify(variables)),
  });

  if (operationName) {
    params.append('operationName', operationName);
  }

  return `${baseUrl}?${params.toString()}`;
};

export const graphqlClient = (preview: boolean = false) => {
  return {
    request: async function execute<Result = any, Variables = any>(
      query: TadaDocumentNode,
      variables: Variables,
      operationName?: string
    ): Promise<Result> {
      console.log('QUERY', query, variables);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      if (process.env.CONTENTSTACK_DELIVERY_TOKEN) {
        headers.append('access_token', process.env.CONTENTSTACK_DELIVERY_TOKEN);
      }
      // Optional: append branch ID to headers if necessary
      // if (process.env.CONTENTSTACK_BRANCH_ID) {
      //   headers.append('branch', process.env.CONTENTSTACK_BRANCH_ID);
      // }

      const endpoint = constructGraphQLEndpoint(query, variables, operationName);

      const response = await fetch(endpoint, {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log('RESPONSE', JSON.stringify(json, null, 2));
      return json.data;
    }
  };
};
