module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        'import/no-unresolved': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
                'newlines-between': 'never',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    overrides: [
        {
            files: ['**/*.test.ts', '**/*.spec.ts'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
    ],
};
