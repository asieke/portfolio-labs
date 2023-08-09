/** @type {import('tailwindcss').Config} */

const COLORS = {
	dark: {
		700: '#1e1b4b',
		800: '#000',
		900: 'rgb(30,30,30)',
		950: '#000'
	},
	primary: {
		0: '#FFFFFF',
		100: '#E7DEFE',
		200: '#CEBEFE',
		300: '#B49DFE',
		400: '#9F84FD',
		500: '#7C5CFC',
		600: '#5E43D8',
		700: '#432EB5',
		800: '#2D1D92',
		900: '#1D1178'
	},
	secondary: {
		100: '#E0E9F4',
		200: '#C3D4E9',
		300: '#90A3BF',
		400: '#596780',
		500: '#1A202C',
		600: '#131825',
		700: '#0D121F',
		800: '#080C19',
		900: '#040815'
	}
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: COLORS,
			gridTemplateColumns: {
				// Complex site-specific row configuration
				rightcol: '67% 33%',
				leftcol: '33% 67%'
			},
			fontSize: {
				table: '14px'
			}
		}
	}
};
