<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Summary from './components/Summary.svelte';
	import { PerformanceChart } from '$components/chart';
	import { addAIContext } from '$lib/stores/ai';

	export let data;
	const { balances, portfolios } = data;

	addAIContext(`Account Summary Total Account Value $9,051,313.86 Total Cost Basis  $2,318,854.11 Yearly Change 38.87% Monthly Change 0.27% Weekly Change 0.08%`);

	const total = portfolios ? portfolios[portfolios.length - 1] : null;
</script>

<Container layout="right">
	<div slot="left">
		{#if balances && portfolios}
			<h3>Portfolio Summary</h3>
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
			<h3>Account Summary</h3>
			<Summary portfolio={total} />
		{/if}
	</div>
</Container>
