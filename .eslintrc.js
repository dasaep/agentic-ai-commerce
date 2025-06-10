module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'prettier'],
  plugins: ['jsx-a11y', 'react-hooks', 'security'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'security/detect-object-injection': 'error',
  },
};
