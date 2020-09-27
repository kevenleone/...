module.exports = {
  env: {
    browser: true,
<<<<<<< HEAD
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
=======
    commonjs: true,
    'cypress/globals': true,
    es6: true
  },
  extends: [
    'standard',
    'prettier/standard',
    'plugin:cypress/recommended',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
>>>>>>> Initialize javascript-config
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
<<<<<<< HEAD
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'semi': ["error", "always"],
    "simple-import-sort/sort": "error",
    "sort-keys": ["error", "asc", { "caseSensitive": true, "natural": false, "minKeys": 2 }],
    "sort-destructure-keys/sort-destructure-keys": [2, { "caseSensitive": false }],
    "sort-keys-fix/sort-keys-fix": "warn",
    "no-explicit-any": "off",
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", { "genericType": "never" }],
    "react/display-name": "off"
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect',
    },
  }
}
=======
    ecmaVersion: 2018
  },
  plugins: [
    'cypress',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'react'
  ],
  rules: {
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-async-tests': 'error',
    'cypress/no-force': 'warn',
    'cypress/no-unnecessary-waiting': 'error',
    'max-len': ['error', { code: 120 }],
    'simple-import-sort/sort': 'error',
    'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ]
  }
}
>>>>>>> Initialize javascript-config
