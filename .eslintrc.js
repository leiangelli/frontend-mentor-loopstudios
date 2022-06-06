module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
    // 'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    camelCase: 'off',
    'comma-dangle': 'error',
    'default-case': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'no-alert': 'off',
    'no-await-in-loop': 'error',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-labels': 'off',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-new': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'error',
    'no-shadow': 'error',
    'no-useless-catch': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    quotes: ['error', 'single'],
    'require-await': 'error',
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'template-curly-spacing': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
}
