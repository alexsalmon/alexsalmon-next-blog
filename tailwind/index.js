import draculaColors from './DraculaColors';
import plugin from 'tailwindcss/plugin';

module.exports = (prefix, hard = false) =>
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    plugin(() => {}, {
        theme: {
            extend: {
                colors: () => ({
                    ...(() => {
                        const returnColors = {};

                        Object.keys(draculaColors).forEach((key, index) => {
                            index < 10
                                ? (returnColors[prefix ? prefix + `-${key}` : key] = draculaColors[key])
                                : (returnColors[prefix && hard ? prefix + `-${key}` : key] = draculaColors[key]);
                        });

                        return returnColors;
                    })(),
                }),
            },
        },
    });
