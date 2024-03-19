const port = process.env.PORT || 8000;

const constructGraphQLEndpoint = (query: string, variables: Record<string, any> = {}, operationName?: string): string => {
  const baseUrl = `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_API_KEY}`;
  const environment = process.env.CONTENTSTACK_ENVIRONMENT || 'production';

  const params = new URLSearchParams({
    environment: environment,
    query: encodeURIComponent(query),
    variables: encodeURIComponent(JSON.stringify(variables)),
  });

  if (operationName) {
    params.append('operationName', operationName);
  }

  return `${baseUrl}?${params.toString()}`;
};

export const graphqlClient = (preview: boolean = false) => {
  return {
    request: async (query: string, variables: Record<string, any> = {}, operationName?: string) => {
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
      console.log('RESPONSE', json);
      return json;
    }
  };
};
