/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: {
					700: '#1e1b4b',
					800: '#000',
					900: 'rgb(30,30,30)',
					950: '#000'
				}
			},
			gridTemplateColumns: {
				// Complex site-specific row configuration
				rightcol: '67% 33%',
				leftcol: '33% 67%'
			}
		}
	},
	plugins: []
};
