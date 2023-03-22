import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const profileMenuShowing = writable(false);

const profileMenuClickHandler = (event: Event) => {
	const target = event.target as HTMLElement;
	if (!target.closest('#profile-menu')) {
		profileMenuShowing.set(false);
	}
};

profileMenuShowing.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', profileMenuClickHandler);
		} else {
			document.removeEventListener('click', profileMenuClickHandler);
		}
	}
});
