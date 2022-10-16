const colors = require("windicss/colors");
const typography = require('windicss/plugin/typography')
module.exports = {
darkMode: 'class',
        plugins: [typography],
	theme: {
		extend: {
                  colors: {
                     blueGray: colors.blueGray
                  },
                  backgroundSize: {
                    'auto': 'auto',
                    'cover': 'cover',
                    'contain': 'contain',
                    '50%': '50%',
                    '16': '4rem',
	            '1': '0.2rem',
                  }
                }
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

