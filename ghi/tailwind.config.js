/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pop: ['Odibee Sans']
            },
            colors: {
                custom: {
                    lb: '#025E73',
                    db: '#011F26',
                    mauve: '#A5A692',
                    beige: '#BFB78F',
                    gold: '#F2A71B',
                },
            },
        },
    },
    plugins: [],
}
