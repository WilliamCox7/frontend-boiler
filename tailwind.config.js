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
    fontSize: {
      display: {
        1: [
          '84px',
          {
            lineHeight: '96px',
            letterSpacing: '-2px',
          },
        ],
        2: [
          '72px',
          {
            lineHeight: '80px',
            letterSpacing: '-2px',
          },
        ],
        3: [
          '56px',
          {
            lineHeight: '64px',
            letterSpacing: '-1px',
          },
        ],
      },
      header: {
        1: [
          '44px',
          {
            lineHeight: '48px',
            letterSpacing: '-1px',
          },
        ],
        2: [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '-1px',
          },
        ],
        3: [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '-1px',
          },
        ],
        4: [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '-1px',
          },
        ],
        5: [
          '18px',
          {
            lineHeight: '24px',
            letterSpacing: '-1px',
          },
        ],
        6: [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0px',
          },
        ],
      },
      body: {
        xl: [
          '20px',
          {
            lineHeight: '36px',
            letterSpacing: '0px',
          },
        ],
        xl: [
          '18px',
          {
            lineHeight: '32px',
            letterSpacing: '0px',
          },
        ],
        xl: [
          '16px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
          },
        ],
        xl: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
          },
        ],
        xl: [
          '13px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
          },
        ],
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
