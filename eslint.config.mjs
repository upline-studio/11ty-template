import antfu, { parserPlain } from '@antfu/eslint-config';
import node from 'eslint-plugin-n';

export default antfu(
  {
    formatters: true,
    vue: true,
    markdown: false,
    typescript: {
      tsconfigPath: 'tsconfig.json',
      overrides: {
        'ts/consistent-type-definitions': ['error', 'type'],
        'ts/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
      },
    },
  },

  {
    rules: {
      'node/exports-style': ['error', 'module.exports'],
    },
    files: ['11ty/*'],
  },

  {
    rules: {
      'style/semi': ['error', 'always'],
      'no-console': ['warn'],
    },
  },
  {
    ...node.configs['flat/recommended-module'],
    files: ['_dev/*.mjs'],
  },
  {
    files: ['**/*.njk'],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-jinja-template'],
          parser: 'jinja-template',
        },
      ],
    },
  },
);
