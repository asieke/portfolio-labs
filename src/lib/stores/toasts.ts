import { writable } from 'svelte/store';

type Toast = {
	message: string;
	id: number;
	status: 'warning' | 'success' | 'error' | 'info';
	state: 'showing' | 'hiding';
};

export const toasts = writable([] as Toast[]);

export const addToast = (message: string, status: 'warning' | 'success' | 'error' | 'info') => {
	//set the ID to the length of the array + 1
	let id = 0;

	toasts.update((t) => {
		//get the maximum ID from the array
		id = Math.max(...t.map((t) => t.id), 0) + 1;
		return [...t, { message, id, status, state: 'showing' }];
	});

	setTimeout(() => {
		removeToast(id);
	}, 5000);
};

export const removeToast = (id: number) => {
	toasts.update((t) => t.filter((t) => t.id !== id));
};
