<script lang="ts">
	import { Container } from '$components/layout';
	import { addPortfolio } from '$models/portfolios';
	import { DataTable } from '$components/data';

	export let data;

	console.log(data);

	let state: 'initial' | 'loading' | 'error' | 'success' = 'initial';

	const { supabase, accounts } = data;

	let portfolioData = {
		name: '',
		description: '',
		transactions: '',
		positions: '',
		account_id: accounts[0].id
	};

	const handleSubmit = async () => {
		if (
			portfolioData.transactions === '' ||
			portfolioData.positions === '' ||
			portfolioData.name === '' ||
			portfolioData.description === ''
		) {
			state = 'error';
			return;
		}

		state = 'loading';
		await addPortfolio(portfolioData, supabase);
		state = 'success';
		setTimeout(() => {
			state = 'initial';
			portfolioData.name = '';
			portfolioData.description = '';
			portfolioData.transactions = '';
			portfolioData.positions = '';
		}, 1000);
	};

	const handleFileChange = (event: Event, type: 'transactions' | 'positions') => {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (typeof e.target?.result === 'string') {
					portfolioData[type] = e.target.result;
				}
			};
			reader.readAsText(file);
		}
	};
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2">
		<Container>
			Account: {data.accounts[0].name}
		</Container>
	</div>
	<div class="space-y-4">
		<Container>
			{#if state === 'initial' || state === 'error'}
				<h3 class="mb-4 border-b-[1px] pb-2">Add a Portfolio</h3>
				<div class="mt-5">
					<label for="name"
						>Portfolio Name
						{#if state === 'error' && portfolioData.name === ''}
							<span class="text-red-500"> Required</span>
						{/if}
					</label>
					<input
						type="text"
						bind:value={portfolioData.name}
						name="name"
						class=""
						placeholder="Direct Index Portfolio"
					/>
					<label for="description"
						>Portfolio Description
						{#if state === 'error' && portfolioData.description === ''}
							<span class="text-red-500"> Required</span>
						{/if}
					</label>
					<input
						type="text"
						bind:value={portfolioData.description}
						name="description"
						class=""
						placeholder="Direct Index of All S&P Stocks"
					/>
					<label for="transactions"
						>Transactions
						{#if state === 'error' && portfolioData.transactions === ''}
							<span class="text-red-500"> Required</span>
						{/if}
					</label>
					<input
						type="file"
						name="transactions"
						class=""
						on:change={(e) => handleFileChange(e, 'transactions')}
					/>

					<label for="positions"
						>Positions
						{#if state === 'error' && portfolioData.positions === ''}
							<span class="text-red-500"> Required</span>
						{/if}
					</label>
					<input
						type="file"
						name="positions"
						class=""
						on:change={(e) => handleFileChange(e, 'positions')}
					/>
					<button on:click={handleSubmit}>Add Portfolio</button>
				</div>
			{:else if state === 'loading'}
				<h3 class="mb-4 border-b-[1px] pb-2">Adding Portfolio...</h3>
			{:else}
				<h3 class="mb-4 border-b-[1px] pb-2">Portfolio Added</h3>
			{/if}
		</Container>
	</div>
</div>

<style lang="postcss">
	label {
		@apply mt-4 block text-sm font-medium leading-6 text-gray-900;
	}
	input[type='text'] {
		@apply mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}
	input[type='file'] {
		@apply file:border-0 file:py-1.5 file:px-3 file:text-gray-400 file:mr-3 mt-2 text-gray-600 block w-full rounded-md border-[1px] shadow-sm sm:text-sm sm:leading-6;
	}
	button {
		@apply mt-5 py-1.5 px-3 rounded-md bg-indigo-600 text-white text-sm;
	}
</style>
