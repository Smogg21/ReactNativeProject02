module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // ... other rules
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/react-in-jsx-scope': 'off',
    'eslint.autoFixOnSave': true,
    'eslint.run': 'onSave',
  },
};
