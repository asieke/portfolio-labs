import { writable } from 'svelte/store';

export const context = writable('');

export const addAIContext = (content: string) => {
	context.update(() => content);
};
