import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const darkMode = writable(false);

// export const toggleDarkMode = (set?: string | MouseEvent) => {
// 	if (typeof set === 'string') {
// 		document.documentElement.classList.toggle('dark', set === 'dark');
// 		localStorage.setItem('color-theme', set);
// 		return;
// 	} else {
// 		document.documentElement.classList.toggle('dark');
// 		localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
// 	}
// };

darkMode.subscribe((value) => {
	if (browser) {
		console.log('Toggling Dark Mode to', value);
		if (value === true) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
});
