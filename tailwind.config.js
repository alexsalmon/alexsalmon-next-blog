/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const draculaColors = require('./tailwind/DraculaColors');
const themeColors = require('./tailwind/ThemeColors');

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ...draculaColors,
                ...themeColors,
                primary: themeColors.salmon,
                secondary: draculaColors.yellow,
                link: draculaColors.cyan,
                // background: draculaColors.darker['900'],
                background: colors.gray['900'],
                text: draculaColors.darker['50'],
                muted: draculaColors.darker['400'],
            },
            keyframes: {
                bounceUp: {
                    '0%, 100%': {
                        transform: 'translateY(12.5%)',
                        'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(-12.5%)',
                        'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
            animation: {
                'bounce-up': 'bounceUp 1s infinite',
            },
            typography: () => ({
                DEFAULT: {
                    css: {
                        color: draculaColors.darker['50'],
                        a: {
                            color: draculaColors.cyan['500'],
                            '&:hover': {
                                color: draculaColors.cyan['200'],
                            },
                        },
                    },
                },
            }),
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins: [require('@tailwindcss/typography')],
};
