// eslint-disable-next-line @typescript-eslint/no-var-requires
const draculaColors = require('./tailwind/DraculaColors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ...draculaColors,
                primary: draculaColors.orange,
                secondary: draculaColors.yellow,
                link: draculaColors.cyan,
                // background: draculaColors.darker['900'],
                background: colors.gray['900'],
                text: draculaColors.darker['50'],
                muted: draculaColors.darker['400'],
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins: [require('@tailwindcss/typography')],
};
