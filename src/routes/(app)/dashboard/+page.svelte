<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Summary from './components/Summary.svelte';
	import AssetAllocation from './components/AssetAllocation.svelte';

	import { PerformanceChart } from '$components/chart';
	import { addAIContext } from '$lib/stores/ai';

	export let data;
	const { balances, portfolios } = data;

	addAIContext(`Account Summary Total Account Value $9,051,313.86 Total Cost Basis  $2,318,854.11 Yearly Change 38.87% Monthly Change 0.27% Weekly Change 0.08%`);

	const total = portfolios ? portfolios[portfolios.length - 1] : null;
</script>

<div class="flex flex-col gap-6 lg:grid lg:grid-cols-3">
	<div class="lg:grid-row-1 order-2 space-y-6 lg:col-span-2 lg:row-span-2">
		<div class="">
			<Container>
				{#if portfolios}
					<h3 class="mb-4">My Portfolio Summary</h3>
					<Table {portfolios} />
				{/if}
			</Container>
		</div>
		<div class="">
			<Container>
				{#if balances}
					<PerformanceChart {balances} />
				{/if}
			</Container>
		</div>
	</div>
	<div class="lg:grid-row-1 order-1 col-span-1 lg:order-2">
		<Container>
			{#if total}
				<h3 class="mb-4">Account Summary</h3>
				<Summary portfolio={total} />
			{/if}
		</Container>
	</div>
	<div class="lg:grid-row-2 order-4 col-span-1 lg:order-4">
		<Container>
			{#if total}
				<h3 class="mb-4">My Asset Allocation</h3>
				<AssetAllocation portfolio={total} />
			{/if}
		</Container>
	</div>
</div>

<!-- <Container layout="right">
	<div slot="left">
		{#if balances && portfolios}
			<h3 class="mb-4">Portfolio Summary</h3>
			<section class="mb-8">
				<Table {portfolios} />
			</section>
			<section class="mb-4">
				<PerformanceChart {balances} />
			</section>
		{/if}
	</div>

	<div slot="right">
		{#if total}
			<h3 class="mb-4">Account Summary</h3>
			<Summary portfolio={total} />
		{/if}
	</div>
</Container> -->
