import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const mobileMenuShowing = writable(false);

const mobileMenuClickHandler = (event: Event) => {
	const target = event.target as HTMLElement;
	if (!target.closest('#mobile-menu')) {
		mobileMenuShowing.set(false);
	}
};

mobileMenuShowing.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', mobileMenuClickHandler);
		} else {
			document.removeEventListener('click', mobileMenuClickHandler);
		}
	}
});
