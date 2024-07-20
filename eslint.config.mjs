import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import parser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import * as reactHooksExtraPlugin from 'eslint-plugin-react-hooks-extra';
import * as reactDomPlugin from 'eslint-plugin-react-dom';
import * as reactXPlugin from 'eslint-plugin-react-x';

export default tseslint.config(
  // register all of the plugins up-front
  {
    name: 'plugins',
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['react-hooks']: reactHooksPlugin,
      ['react-hooks-extra']: reactHooksExtraPlugin,
      ['react-dom']: reactDomPlugin,
      ['react']: reactXPlugin,
      ['import']: importPlugin,
      ['@stylistic/ts']: stylisticTs,
    },
  },
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      'dist/**',
      'package-lock.json',
      's3/*',
      '.idea/**',
    ],
  },

  stylistic.configs.customize({ semi: true, arrowParens: true, braceStyle: '1tbs' }),

  // base config
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2015,
      },
    },
    rules: {
      //
      // eslint-plugin-import
      //
      // disallow AMD require/define
      // 'import/no-amd': 'error',
      // // disallow non-import statements appearing before import statements
      // 'import/first': 'error',
      // // Require a newline after the last import/require in a group
      // 'import/newline-after-import': 'error',
      // // Forbid import of modules using absolute paths
      // 'import/no-absolute-path': 'error',
      // // disallow imports from duplicate paths
      // 'import/no-duplicates': 'error',
      // // Prevent importing the default as if it were named
      // 'import/no-named-default': 'error',
      // // Forbid a module from importing itself
      // 'import/no-self-import': 'error',

      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },

  {
    name: 'eslint/recommended',
    ...eslint.configs.recommended,
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser,
      parserOptions: {
        disallowAutomaticSingleRunInference: true,
        // we pretty well never create/change tsconfig structure - so no need to ever evict the cache
        // in the rare case that we do - just need to manually restart their IDE.
        // cacheLifetime: {
        //   glob: 'Infinity',
        // },
        projectService: true,
        tsconfigRootDir: '.',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
      sourceType: 'module',
    },
  },

  {
    name: 'src',
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.mts', 'src/**/*.cts'],
    extends: tseslint.configs.recommendedTypeChecked,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',

      'react/display-name': 'off',

      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',

      'react-hooks-extra/ensure-custom-hooks-using-other-hooks': 'error',
      'react-hooks-extra/prefer-use-state-lazy-initialization': 'error',

      'react-dom/no-children-in-void-dom-elements': 'warn',
      'react-dom/no-dangerously-set-innerhtml': 'warn',
      'react-dom/no-dangerously-set-innerhtml-with-children': 'error',
      'react-dom/no-find-dom-node': 'error',
      'react-dom/no-missing-button-type': 'warn',
      'react-dom/no-missing-iframe-sandbox': 'warn',
      'react-dom/no-namespace': 'error',
      'react-dom/no-render-return-value': 'error',
      'react-dom/no-script-url': 'warn',
      'react-dom/no-unsafe-iframe-sandbox': 'warn',
      'react-dom/no-unsafe-target-blank': 'warn',

      'react/ensure-forward-ref-using-ref': 'warn',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-children-count': 'warn',
      'react/no-children-for-each': 'warn',
      'react/no-children-map': 'warn',
      'react/no-children-only': 'warn',
      'react/no-children-prop': 'warn',
      'react/no-children-to-array': 'warn',
      'react/no-clone-element': 'warn',
      'react/no-comment-textnodes': 'warn',
      'react/no-component-will-mount': 'error',
      'react/no-component-will-receive-props': 'error',
      'react/no-component-will-update': 'error',
      'react/no-create-ref': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-duplicate-key': 'error',
      'react/no-implicit-key': 'error',
      'react/no-missing-key': 'error',
      'react/no-nested-components': 'warn',
      'react/no-redundant-should-component-update': 'error',
      'react/no-set-state-in-component-did-mount': 'warn',
      'react/no-set-state-in-component-did-update': 'warn',
      'react/no-set-state-in-component-will-update': 'warn',
      'react/no-string-refs': 'error',
      'react/no-unsafe-component-will-mount': 'warn',
      'react/no-unsafe-component-will-receive-props': 'warn',
      'react/no-unsafe-component-will-update': 'warn',
      'react/no-unstable-context-value': 'error',
      'react/no-unstable-default-props': 'error',
      'react/no-unused-class-component-members': 'warn',
      'react/no-unused-state': 'warn',
      'react/no-useless-fragment': 'warn',
      'react/prefer-destructuring-assignment': 'warn',
      'react/prefer-shorthand-boolean': 'warn',
      'react/prefer-shorthand-fragment': 'warn',
      'react/no-leaked-conditional-rendering': 'warn',

      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowDestructuring: true, // Disallow `const { props, state } = this`; true by default
          allowedNames: ['self'], // Allow `const self = this`; `[]` by default
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/prefer-promise-reject-errors': 'off',
      'max-lines': ['error', { max: 2000, skipBlankLines: true, skipComments: true }],

      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/switch-colon-spacing": ["error", {"after": true, "before": false}],
      "@stylistic/jsx-props-no-multi-spaces": ["error"],
      "@stylistic/jsx-self-closing-comp": ["error"],
      "@stylistic/jsx-sort-props": ["error"],
      
      "@stylistic/ts/object-curly-newline": ["error", {"ObjectPattern": "always"}],
      '@stylistic/no-extra-parens': 'off',
      '@stylistic/ts/no-extra-parens': ['error', 'functions'],
      "@stylistic/object-property-newline": ['error'],
    }
  },
);
