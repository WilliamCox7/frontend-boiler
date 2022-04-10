const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: 'green',
        red: 'red',
        blue: 'blue',
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
