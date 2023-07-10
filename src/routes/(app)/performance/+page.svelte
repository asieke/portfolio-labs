<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './Table.svelte';
	import Chart from './Chart.svelte';
	import type { ComponentProps } from './types';

	export let data: ComponentProps;
	const { portfolios, balances, balancesYearly, labels } = data;
	let visibility = Array(labels.length).fill(false);

	let portfolio_id = Object.keys(portfolios)[0];
	let startDate = balances[portfolio_id][0].date;
	let endDate = balances[portfolio_id][balances[portfolio_id].length - 1].date;

	$: selectedBalances = [...balances[portfolio_id]];
	$: selectedBalancesYearly = [...balancesYearly[portfolio_id]];

	const updateVisibility = (i: number, value: boolean) => {
		visibility[i] = value;
	};

	const updateDates = () => {
		selectedBalances = balances[portfolio_id].filter((b) => {
			return b.date >= startDate && b.date <= endDate;
		});
	};
</script>

<div class="max-w-5xl mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-rightcol">
		<div class="main bg-slate-50 mb-4 lg:mb-0 lg:mr-4 h-[560px]">
			<h2>{portfolios[portfolio_id].name}</h2>
			<h3>{portfolios[portfolio_id].description}</h3>
			<Chart balances={selectedBalances} {visibility} />
		</div>
		<div class="main bg-slate-50 mb-4 lg:mb-0 h-[560px]">
			<select class="w-full" bind:value={portfolio_id}>
				{#each Object.keys(portfolios) as id, i}
					<option value={id}>{portfolios[id].name}</option>
				{/each}
			</select>
			<h3>Compare to Benchmarks</h3>
			{#each labels as label, i}
				<label>
					<input
						type="checkbox"
						bind:checked={visibility[i]}
						on:change={() => updateVisibility(i, visibility[i])}
					/>
					{label}
				</label>
				<br />
			{/each}

			<h3>Filter by Year</h3>
			<h3 class="mb-4 border-b-[1px] pb-2 mt-8">Filter by Year</h3>
			<div class="flex">
				<div class="w-[48%] mr-[4%]">
					<label for="start_date">Start Date</label>
					<input bind:value={startDate} type="date" id="start_time" class="w-full text-sm" />
				</div>
				<div class="w-[48%]">
					<label for="end_date">End Date</label>
					<input bind:value={endDate} type="date" id="end_date" class="w-full text-sm" />
				</div>
			</div>
			<button on:click={updateDates} class="bg-primary-600 p-3 mt-4 rounded text-white"
				>Show Data</button
			>
		</div>
	</div>
	<div class="container main mt-0 lg:mt-4">
		<Table data={selectedBalancesYearly} />
	</div>
</div>

<!-- <Container>
	<select class="w-full" bind:value={portfolio_id}>
		{#each Object.keys(portfolios) as id, i}
			<option value={id}>{portfolios[id].name}</option>
		{/each}
	</select>
</Container>

<Container>
	<h3 class="mb-4 border-b-[1px] pb-2">Compare Performance to Benchmarks</h3>

	{#each labels as label, i}
		<label>
			<input
				type="checkbox"
				bind:checked={visibility[i]}
				on:change={() => updateVisibility(i, visibility[i])}
			/>
			{label}
		</label>
		<br />
	{/each}
</Container>
<Container>
	<h2>{portfolios[portfolio_id].name}</h2>
	<h3>{portfolios[portfolio_id].description}</h3>
	<Chart balances={selectedBalances} {visibility} />
</Container>
<Container>
	<h3 class="mb-4 border-b-[1px] pb-2 mt-8">Filter by Year</h3>
	<div class="flex">
		<div>
			<label for="start_date">Start Date</label>
			<input bind:value={startDate} type="date" id="start_time" />
		</div>
		<div>
			<label for="end_date">End Date</label>
			<input bind:value={endDate} type="date" id="end_date" />
		</div>
	</div>
	<button on:click={updateDates} class="bg-primary-600 p-3 mt-4 rounded text-white"
		>Show Data</button
	>
</Container> -->

<!-- <Container>
	<Table data={selectedBalancesYearly} />
</Container> -->

<!-- <script lang="ts">
	import { Container } from '$components/layout';
	import AddPositions from '../positions/components/AddPositions.svelte';
	import Chart from './Chart.svelte';
	import Table from './Table.svelte';
	import type { ComponentProps } from './types';

	export let data: ComponentProps;

	const { portfolios, balances } = data;

	let portfolio_id = '116';

	let selectedPortfolio = portfolios[portfolio_id];
	let selectedBalances = balances[portfolio_id];
	$: displayBalances = [...balances[portfolio_id]];

	const updateData = () => {
		console.log(portfolio_id);
		selectedPortfolio = portfolios[portfolio_id];
		selectedBalances = balances[portfolio_id];
	};

	let startDate = balances[portfolio_id][0].date;
	let endDate = balances[portfolio_id][balances[portfolio_id].length - 1].date;

	const labels = Object.keys(selectedBalances[0].benchmarks as Record<string, any>);

	//initialize visibility to be same length as labels
	let visibility = Array(labels.length).fill(false);

	const updateVisibility = (i: number, value: boolean) => {
		visibility[i] = value;
		console.log(visibility);
	};

	const updateBalances = () => {
		displayBalances = selectedBalances.filter((b) => {
			return b.date >= startDate && b.date <= endDate;
		});
	};
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol mb-4">
	<div class="row-span-2 h-[580px]">
		<Container>
			<h2 class="font-semibold text-lg">{portfolio_id ? portfolios[portfolio_id].name : ''}</h2>
			<h3 class="text-sm">{portfolio_id ? portfolios[portfolio_id].description : ''}</h3>
			<hr class="pb-4 mt-4" />
			<Chart balances={displayBalances} {visibility} />
		</Container>
	</div>
	<div class="ml-4 space-y-4 h-[580px]">
		<Container>
			<select class="w-full" bind:value={portfolio_id} on:change={updateData}>
				{#each Object.keys(portfolios) as id, i}
					<option value={id}>{portfolios[id].name}</option>
				{/each}
			</select>

			<h3 class="mb-4 border-b-[1px] pb-2">Compare Performance to Benchmarks</h3>

			{#each labels as label, i}
				<label>
					<input
						type="checkbox"
						bind:checked={visibility[i]}
						on:change={() => updateVisibility(i, visibility[i])}
					/>
					{label}
				</label>
				<br />
			{/each}

			<h3 class="mb-4 border-b-[1px] pb-2 mt-8">Filter by Year</h3>
			<div class="flex">
				<div>
					<label for="start_date">Start Date</label>
					<input bind:value={startDate} type="date" id="start_time" />
				</div>
				<div>
					<label for="end_date">End Date</label>
					<input bind:value={endDate} type="date" id="end_date" />
				</div>
			</div>
			<button on:click={updateBalances} class="bg-primary-600 p-3 mt-4 rounded text-white"
				>Show Data</button
			>
		</Container>
	</div>
</div>

<Container><Table balances={displayBalances} /></Container>

<style lang="postcss">
</style> -->
<style lang="postcss">
	.main {
		@apply rounded-lg p-6 lg:px-10 lg:py-8;
	}
</style>
