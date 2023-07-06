<script lang="ts">
	import { Container } from '$components/layout';
	import Chart from './Chart.svelte';
	import Table from './Table.svelte';
	export let data;

	const { portfolios, balances, portfolio_id } = data;

	console.log(data);

	let startDate = balances[0].date;
	let endDate = balances[balances.length - 1].date;

	$: displayBalances = [...balances];

	const labels = Object.keys(balances[0].benchmarks as Record<string, any>);
	//initialize visibility to be same length as labels
	let visibility = Array(labels.length).fill(false);

	const updateVisibility = (i: number, value: boolean) => {
		visibility[i] = value;
		console.log(visibility);
	};

	const updateBalances = () => {
		displayBalances = balances.filter((b) => {
			return b.date >= startDate && b.date <= endDate;
		});
	};

	let selectedPortfolio = portfolio_id; // to store the current selected portfolio
	const handlePortfolioChange = () => {
		location.href = `?id=${selectedPortfolio}`;
	};
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol mb-4">
	<div class="row-span-2 h-[580px]">
		<Container>
			<h2 class="font-semibold text-lg">{portfolios[selectedPortfolio].name}</h2>
			<h3 class="text-sm">{portfolios[selectedPortfolio].description}</h3>
			<hr class="pb-4 mt-4" />
			<Chart balances={displayBalances} {visibility} />
		</Container>
	</div>
	<div class="ml-4 space-y-4 h-[580px]">
		<Container>
			<!-- create a dropdown menu with all the portfolios.  When a user selects a new portfolio is reloads the page with an id param equal to portfolio id -->
			<select class="w-full" bind:value={selectedPortfolio} on:change={handlePortfolioChange}>
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
<Container><Table {balances} /></Container>

<style lang="postcss">
</style>
