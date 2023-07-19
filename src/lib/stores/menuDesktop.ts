// Importing the necessary modules from Svelte and your app environment
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// This line creates a new writable Svelte store with an initial value of false.
// This store will hold the state of whether the desktop menu is showing.
export const menuDesktopShowing = writable(false);

// This function is used as an event handler for click events.
// It checks if the clicked element is inside an element with the id 'menuDesktop'
// If the clicked element is not inside '#menuDesktop', it sets the 'menuDesktopShowing' store to false
const menuDesktopClickHandler = (event: Event) => {
	const target = event.target as HTMLElement;
	if (!target.closest('#menuDesktop')) {
		menuDesktopShowing.set(false);
	}
};

// This function subscribes to changes in the 'menuDesktopShowing' store
// Whenever the store value changes, this function will run
// If the store value is true (meaning the menu should be shown), it adds the click event listener to the document
// If the store value is false (meaning the menu should not be shown), it removes the click event listener from the document
// This ensures that we only listen for clicks when the menu is visible, so we can hide the menu if a click is detected outside the menu
menuDesktopShowing.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', menuDesktopClickHandler);
		} else {
			document.removeEventListener('click', menuDesktopClickHandler);
		}
	}
});
