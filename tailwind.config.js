const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './*.html',
    ],

    plugins: [require('@tailwindcss/typography'),
              require('daisyui')],

    daisyui: {
        themes: ["retro"],
    },
};
