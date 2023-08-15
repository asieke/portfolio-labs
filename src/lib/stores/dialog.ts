import { writable } from 'svelte/store';

type Dialog = {
	title: string;
	message: string;
	buttons: {
		text: string;
		onClick: () => void;
		color: string;
	}[];
};

export const dialog = writable<Dialog | null>(null);

export const showDialog = (d: Dialog) => {
	dialog.set(d);
};
