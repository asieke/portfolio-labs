import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initializeDarkMode = () => {
	if (browser) {
		return localStorage.getItem('darkMode') === 'true';
	}
	return false;
};
//initialize the value to whatever is in local storage
export const darkMode = writable(initializeDarkMode());

darkMode.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
		}
	}
});
