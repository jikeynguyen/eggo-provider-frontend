import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:5001/graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/generated/schema.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      documents: 'src/**/*.{graphql,gql}',
      config: {
        withComponent: true,
      },
      hooks: {
        afterOneFileWrite: ['prettier --write'],
      },
    },
  },
};

export default config;
