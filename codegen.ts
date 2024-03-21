import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3333',
  documents: 'src/**/!(graphql).ts(x)?',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        {
          add: {
            // nemohu ignorovat přes .eslintignore, protože to ignoruje i typy a eslint si myslí
            // že věci z graphql-js jsou any
            content: '/* eslint-disable */',
          },
        },
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  config: {
    withHooks: true,
    useExplicitTyping: true,
  },
};

export default config;
