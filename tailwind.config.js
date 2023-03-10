/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1440px' },
			// => @media (max-width: 1439px) { ... }

			lg: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			md: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			sm: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			'2sm': { max: '639px' },
			// => @media (max-width: 639px) { ... }

			'3sm': { max: '520px' },
			// => @media (max-width: 520px) { ... }

			'4sm': { max: '420px' },
			// => @media (max-width: 420px) { ... }
		},

		extend: {
			colors: {
				'my-orange': '#de6e45',
				'my-light-gray': '#f1f1f1',
				'my-brown': '#523526',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				poiret: ['Poiret One', 'cursive'],
				times: ['Times_New_Roman'],
			},
			// backgroundImage: {
			// 	bgWel: "url('/src/images/bgWelcome.png')",
			// },
			zIndex: {
				1: 1,
				'-1': '-1',
				2: 2,
				'-2': '-2',
			},
		},
	},
	plugins: [],
}
