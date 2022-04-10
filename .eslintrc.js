const esLintConfig = {
  extends: [
    'next/core-web-vitals',
    'prettier',
  ],
  env: {
    jest: true,
  }
};

module.exports = esLintConfig;