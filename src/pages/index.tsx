import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { createApolloClient } from '../createApolloClient';
import { Foo } from '../components/Foo';

const client = createApolloClient();

const Homepage = () => {
  return (
    <ApolloProvider client={client}>
      <Foo />
    </ApolloProvider>
  );
};

export default Homepage;
