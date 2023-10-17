module.exports = {
    theme: {
      fontFamily: {
        sans: [
          '"Inter var", sans-serif',


          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  }


  /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }