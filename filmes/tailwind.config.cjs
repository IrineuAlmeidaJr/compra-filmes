/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-film': "url('/src/public/assets/bg-film.jpeg')",
        'bg-pop-corn': "url('/src/public/assets/pop-corn.png')" 
      },
      colors: {
        netflix:{
          red: {
            100: '#FF3A68',
            300: '#e50914',
            500: '#db0000',
            700: '#bb1010',
            800: '#831010'
          },
          green: {
            300: '#00B37E',
            500: '#00875F',
            700: '#015F43',
          },
          gray: '#564d4d',
          black: {
            600: '#29292E',
            700: '#121214',
            800: '#09090A',
            900: '#000000'
          },
          white: '#ffffff',

        }    
      }  
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
