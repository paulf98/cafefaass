/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        pastel: {
          ...require('daisyui/src/colors/themes')['[data-theme=pastel]'],
          primary: '#D74178',
          '.btn-primary': {
            'color': 'white',
          },
        },
      }
    ],
  },
  plugins: [    
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
