import { GraphQLSchema, lexicographicSortSchema } from 'graphql';
import { builder } from './builder';
import { foo } from './schema/foo';

const composeSchema = () => {
  builder.queryFields((t) => ({
    foo: foo(t),
  }));
};

export const buildSchema = (): GraphQLSchema => {
  composeSchema();

  return lexicographicSortSchema(builder.toSchema());
};
