// tailwind.config.js

import formsPlugin from '@tailwindcss/forms';



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#00596b",
        secondary:"skyblue",
        third:"#e6cd7e",
        third_dark:"#b3942e",
      },
      fontFamily: {
        SST: ['Cairo', 'mono'],
      
      }
    }
  },
  plugins: [
    formsPlugin,
    function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right'
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
