import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:3333/',
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        errorPolicy: 'all',
      },
    },
  });

  return client;
};
