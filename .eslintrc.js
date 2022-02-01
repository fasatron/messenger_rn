module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/semi': ['warn', 'never'],
        '@typescript-eslint/indent': ['warn', 2],
        '@typescript-eslint/member-delimiter-style': ['warn', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'error',
        'no-use-before-define': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['warn', 2],
        'react/jsx-fragments': 'off',
        'react/no-unstable-nested-components': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-quotes': ['warn', 'prefer-single'],
        semi: 'off',
        indent: 'off',
        'react-native/no-unused-styles': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
      },
    },
  ],
}
