module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '100': '#72c1df',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#339BFF',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#080875',
          '1000' :'#1e1628'
        },
        gray: {
          '900': '#eeecf2',

        },
      },
      fontFamily: {
        sans: ['PT Serif', 'sans-serif'],
        heading: ['Taviraj', 'sans-serif'],
        serif: ['Taviraj', 'serif'],
        prompt:['Prompt', 'sans-serif'],
        jose:['Josefin Sans', 'sans-serif'],

      },
      borderWidth: {
            default:
                 '1px',
                 '3': '3px',
                    },
      lineHeight: {
           'none': '0rem ',

             },
      margin: {
           sm: '8px',
          md: '16px',
           lg: '24px',
           xxl: '450px',
}
    },
  },

  variants: {},
  plugins: [],
}
