<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Summary from './components/Summary.svelte';
	import { PerformanceChart } from '$components/chart';

	export let data;

	const { balances, portfolios } = data;
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
