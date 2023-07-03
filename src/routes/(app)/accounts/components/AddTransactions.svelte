<script lang="ts">
	import { addTransactions } from '$models/transactions';
	import type { SupabaseClient } from '@supabase/supabase-js';

	export let supabase: SupabaseClient;
	export let portfolioID: number;

	let state: 'initial' | 'loading' | 'error' | 'success' = 'initial';
	let transactionData = '';

	const handleSubmit = async () => {
		state = 'loading';

		try {
			await addTransactions(supabase, transactionData, portfolioID);
			state = 'success';
			setTimeout(() => {
				state = 'initial';
				transactionData = '';
			}, 1000);
		} catch (e) {
			state = 'error';
		}
	};

	const handleFileChange = (event: Event) => {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (typeof e.target?.result === 'string') {
					transactionData = e.target.result;
				}
			};
			reader.readAsText(file);
		}
	};
</script>

<h3 class="mb-4 border-b-[1px] pb-2">Add Transaction Data Data</h3>

{#if state === 'initial' || state === 'error'}
	<div class="mt-5">
		<label for="positions"
			>Positions
			{#if state === 'error' && transactionData === ''}
				<span class="text-red-500"> Required</span>
			{/if}
		</label>
		<input type="file" name="positions" class="" on:change={(e) => handleFileChange(e)} />
		<button on:click={handleSubmit}>Add Portfolio</button>
	</div>
{:else if state === 'loading'}
	<h3 class="mb-4 border-b-[1px] pb-2">Adding Positions...</h3>
{:else}
	<h3 class="mb-4 border-b-[1px] pb-2">Positions Added</h3>
{/if}

<style lang="postcss">
	label {
		@apply mt-4 block text-sm font-medium leading-6 text-gray-900;
	}
	input[type='file'] {
		@apply file:border-0 file:py-1.5 file:px-3 file:text-gray-400 file:mr-3 mt-2 text-gray-600 block w-full rounded-md border-[1px] shadow-sm sm:text-sm sm:leading-6;
	}
	button {
		@apply mt-5 py-1.5 px-3 rounded-md bg-indigo-600 text-white text-sm;
	}
</style>
