import tseslint from 'typescript-eslint';
import globals from 'globals';
import parser from '@typescript-eslint/parser';


export default tseslint.config(
  {
    name: 'plugins',
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
    },
  },
    
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: ['tsconfig.json'],
        tsconfigRootDir: '.',
      }
    },
  },

  {
    name: 'src',
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.mts', 'src/**/*.cts'],
    extends: tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.mocha,
        ...globals.jest,
        ...globals.jasmine,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error'
    }
  },

    
);
