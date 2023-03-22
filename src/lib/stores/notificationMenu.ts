import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const notificationMenuShowing = writable(false);

const notificationMenuClickHandler = (event: Event) => {
	const target = event.target as HTMLElement;
	if (!target.closest('#notification-menu')) {
		notificationMenuShowing.set(false);
	}
};

notificationMenuShowing.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', notificationMenuClickHandler);
		} else {
			document.removeEventListener('click', notificationMenuClickHandler);
		}
	}
});
