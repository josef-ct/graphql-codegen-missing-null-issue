/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Foo = {
  __typename?: 'Foo';
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  foo: Foo;
};


export const FooDocument = gql`
    query Foo {
  foo {
    name
  }
}
    `;

/**
 * __useFooQuery__
 *
 * To run a query within a React component, call `useFooQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooQuery(baseOptions?: Apollo.QueryHookOptions<FooQuery, FooQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooQuery, FooQueryVariables>(FooDocument, options);
      }
export function useFooLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooQuery, FooQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooQuery, FooQueryVariables>(FooDocument, options);
        }
export function useFooSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FooQuery, FooQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FooQuery, FooQueryVariables>(FooDocument, options);
        }
export type FooQueryHookResult = ReturnType<typeof useFooQuery>;
export type FooLazyQueryHookResult = ReturnType<typeof useFooLazyQuery>;
export type FooSuspenseQueryHookResult = ReturnType<typeof useFooSuspenseQuery>;
export type FooQueryResult = Apollo.QueryResult<FooQuery, FooQueryVariables>;
export type FooQueryVariables = Exact<{ [key: string]: never; }>;


export type FooQuery = { __typename?: 'Query', foo: { __typename?: 'Foo', name: string } };
