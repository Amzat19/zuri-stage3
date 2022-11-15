/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'laptop': '1100px',
        'lg': '1024px',
        'md': '768px',
        'xl': '1320px',
        'sm': '640px'
      },
      extend: {
        colors: {
          'purple': '#A02279',
          'black': '#434343',
          'extra-black': '#1D1D1E',
          'borderColor': '#A3A3A3',
          'priceColor': '#434343',
          'modalBg': '#4040404D'
        },
      },
    },
    plugins: [],
}
