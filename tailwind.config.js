/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary' : 'hsl(172, 67%, 45%)',
          'cyan-light-gray' : 'hsl(185, 41%, 84%)',
          'cyan-light' : 'hsl(189, 41%, 97%)',
          'cyan-dark' : 'hsl(183, 100%, 15%)',
          'cyan-dark-gray' : 'hsl(186, 14%, 43%)',
          'cyan-gray' : 'hsl(184, 14%, 56%)'
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
}