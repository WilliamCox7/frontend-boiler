const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      brand: {
        green: '#34966D',
        midnight: '#2A343A',
        white: '#FFFFFF',
      },
      secondary: {},
      semantic: {
        info: {
          default: '#0089C2',
          light: '#F2F9FC',
        },
        success: {
          default: '#29823B',
          light: '#F4F9F5',
        },
        warning: {
          default: '#E9A100',
          light: '#FEFAF2',
        },
        error: {
          default: '#DC2020',
          light: '#FDF4F4',
        },
      },
      light: {
        green: '#F5FAF8',
        slate: '#F6F8F9',
        yellow: '#FFFBF4',
      },
      grey: {
        1: '#FDFDFD',
        2: '#EAEBEB',
        3: '#D7D8DA',
        4: '#C3C6C8',
        5: '#B0B4B6',
        6: '#9DA2A4',
        7: '#8A8F93',
        8: '#777D81',
        9: '#646B6F',
        10: '#50595D',
        11: '#3D464C',
        12: '#2A343A',
        13: '#1D2225',
      },
    },
    fontFamily: {
      circular: ['Circular', 'sans-serif', 'Ariel', 'Helvetica', 'Georgia'],
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
