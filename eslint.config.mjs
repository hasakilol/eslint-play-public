import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistPlugin from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config(
    {
        plugins: {
            '@stylistic': stylistPlugin,
        }
    },
    {
        files: ['src/**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: '.',
                jsx: true,
            }
        },
        rules: {
            "@stylistic/object-curly-spacing": ["error", "always"]
        }
    },
);