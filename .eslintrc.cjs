module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:solid/typescript',
        'plugin:prettier/recommended',
    ],

    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'import/extensions': [
            'error',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
                svg: 'always',
            },
        ],
        'no-param-reassign': 'warn',
        curly: ['error', 'multi-line'],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'import/prefer-default-export': 'off',
    },
};
