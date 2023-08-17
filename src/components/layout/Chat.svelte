<script lang="ts">
	import { tick } from 'svelte';
	import { context, chatMessages } from '$lib/stores/ai';
	import { systemPrompt } from '$lib/data/aiPrompts';
	import { valueToChunk } from '$lib/utils/ai';
	import { getChatStream } from '$lib/clients/openAI';

	console.log('Chat Messages', $chatMessages);

	let open = false;
	let message = '';
	let chatContainer: HTMLDivElement;
	let messageContainer: HTMLTextAreaElement;

	const submitMessage = async () => {
		const messagesForAI = [{ role: 'system', content: systemPrompt + '\nContext for this request: ' + $context.content }, ...$chatMessages];

		chatMessages.set([...$chatMessages, { role: 'assistant', content: '...' }]);

		try {
			const response = await getChatStream(messagesForAI);

			if (!response.body) {
				throw new Error('ReadableStream not yet supported in this browser.');
			}

			const reader = response.body.getReader();

			let newMessage = '';
			let chunk = await reader.read();
			while (!chunk.done) {
				newMessage += valueToChunk(chunk.value);

				chunk = await reader.read();

				const temp = [...$chatMessages];
				temp[temp.length - 1].content = newMessage;
				chatContainer.scrollTop = chatContainer.scrollHeight;
				chatMessages.set(temp);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	//create a typed function for handling key down events
	const handleKeyDown = async (e: KeyboardEvent) => {
		//check if the key pressed was enter
		if (e.key === 'Enter' && !e.shiftKey) {
			// Check for absence of Shift key here
			e.preventDefault();
			chatMessages.set([...$chatMessages, { role: 'user', content: message }]);
			tick().then(() => {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			});
			message = '';
			await submitMessage();

			// Allow the DOM to update before scrolling
		}
	};

	const toggleChat = () => {
		open = !open;
		tick().then(() => {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		});
		if (open) {
			//focus on the textarea
			messageContainer.focus();
		}
	};
</script>

<div class="fixed right-0 h-[400px] w-1/3 shadow-xl transition-all duration-300 ease-in-out" style="bottom: {open ? '0px' : '-350px'}">
	<div class="flex h-[50px] w-full items-center justify-between rounded-t-md bg-primary-600 px-4 font-semibold text-white">
		<span>Chat with Clara</span>
		<button on:click={toggleChat}>{open ? '✖' : '▲'}</button>
	</div>
	<div class="h-[350px] w-full bg-slate-100 dark:bg-slate-900">
		<div bind:this={chatContainer} class="h-[290px] w-full overflow-y-auto p-4">
			{#each $chatMessages as item}
				{#if item.content.substring(0, 18) === 'Switching to page:'}
					<div class="mb-3 w-full text-center text-sm text-slate-400 dark:text-slate-700">-{item.content}-</div>
				{:else}
					<div class={`bubble ${item.role === 'user' ? 'user' : 'assistant'} `}>
						{item.content}
					</div>
				{/if}
			{/each}
		</div>
		<div class="flex h-[60px] w-full items-center bg-slate-200 px-4 dark:bg-slate-700">
			<textarea bind:this={messageContainer} bind:value={message} on:keydown={handleKeyDown} />
		</div>
	</div>
</div>

<style lang="postcss">
	textarea {
		@apply h-[40px] w-full resize-none border-[1px] border-slate-300 bg-slate-50 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-300;
		@apply px-2 py-1;
	}

	.bubble {
		@apply mb-2 rounded-md p-3 text-sm;
	}

	.assistant {
		@apply mr-8 bg-slate-200 text-slate-700 dark:bg-slate-500 dark:text-slate-100;
	}

	.user {
		@apply ml-8 bg-primary-100 text-slate-700 dark:bg-primary-800 dark:text-slate-100;
	}
</style>
