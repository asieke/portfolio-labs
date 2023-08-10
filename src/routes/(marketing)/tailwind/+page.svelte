<script lang="ts">
	import { getChatStream } from '$lib/clients/openAI';
	import { valueToChunk } from '$lib/utils/ai';

	let prompt = `You are a front end developer who is an expert in tailwind css.  You will be provided with either a blank element or an existing element AND an instruction on what to create or modify.  You will ONLY return the modified element, no other text.`;

	let code = '<div class="text-red-300">How are you doing today</div>\n<b>Im good</b>';
	let message = '';

	const submitMessage = async (messages: { role: string; content: string }[]) => {
		try {
			const response = await getChatStream(messages, 'gpt-3.5-turbo-0613');

			if (!response.body) {
				throw new Error('ReadableStream not yet supported in this browser.');
			}

			const reader = response.body.getReader();

			let newMessage = '';
			let chunk = await reader.read();
			while (!chunk.done) {
				newMessage += valueToChunk(chunk.value);
				code = newMessage;
				chunk = await reader.read();
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

			const messages = [
				{ role: 'system', content: prompt },
				{ role: 'user', content: code + '\n\n' + message }
			];

			code = '';
			message = '';

			await submitMessage(messages);

			// Allow the DOM to update before scrolling
		}
	};
</script>

<div class="h-screen w-full p-24">
	<div class="grid grid-cols-3 gap-8">
		<div class="container col-span-3">
			<input type="text" bind:value={message} on:keydown={handleKeyDown} />
		</div>
		<div class="container col-span-1 min-h-[500px]">
			<textarea bind:value={code} />
		</div>
		<div class="container col-span-2">{@html code}</div>
	</div>
</div>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<style lang="postcss">
	.container {
		@apply rounded-md bg-white p-8 shadow-lg;
	}

	input {
		@apply w-full rounded-md border-[1px] border-slate-300 px-4 py-2.5;
	}

	textarea {
		@apply h-full w-full border-[1px] border-slate-300 p-4 text-xs;
	}
</style>
