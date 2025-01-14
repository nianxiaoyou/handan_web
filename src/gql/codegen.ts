import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:4000/api',
  documents: 'src/gql/documents/**/*.gql',
  generates: {
    'src/gql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'fragment-matcher'
      ]
    }
  }
  // hooks: {
  //   afterAllFileWrite: ['eslint --fix', 'prettier --write']
  // }
};

export default config;
