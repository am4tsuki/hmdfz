/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				dark: '#171717',
				light: '#FEFCFF',
				orange: '#FFC107',
			},
			fontFamily: {
				mono: ['Roboto Mono', 'ui-monospace'],
				monoxl: ['Anonymous Pro', 'ui-monospace'],
			},
		},
	},
	plugins: [],
};
