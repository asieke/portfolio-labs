import { writable } from 'svelte/store';

export const context = writable<{ page: string; content: string }>({ page: '', content: '' });
export const chatMessages = writable<{ role: string; content: string }[]>([]);

export const addAIContext = (object: { page: string; content: string }) => {
	context.set(object);
};

context.subscribe((value) => {
	if (value.page === '') return;
	chatMessages.update((messages) => {
		if (messages[messages.length - 1] && messages[messages.length - 1].content.substring(0, 18) === 'Switching to page:') {
			return [...messages.slice(0, -1), { role: 'assistant', content: 'Switching to page: ' + value.page }];
		}
		return [...messages, { role: 'assistant', content: 'Switching to page: ' + value.page }];
	});
});
