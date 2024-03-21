import { gql } from '@apollo/client';
import React from 'react';
import { useFooQuery } from '../generated/graphql';

export const fooQuery = gql`
  query Foo {
    foo {
      name
    }
  }
`;

export const Foo = () => {
  const { data, loading, error } = useFooQuery();

  console.debug({ data, loading, error });

  return <p>{data?.foo.name || '-'}</p>;
};
