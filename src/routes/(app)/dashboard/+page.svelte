<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Summary from './components/Summary.svelte';
	import { PerformanceChart } from '$components/chart';

	export let data;
	const { balances, portfolios } = data;
	const total = portfolios ? portfolios[portfolios.length - 1] : null;

	console.log(balances);
</script>

<Container layout="right">
	<div slot="left">
		{#if balances && portfolios}
			<h4>Account Dashboard</h4>
			<Table {portfolios} />
			<PerformanceChart {balances} />
		{/if}
	</div>

	<div slot="right">
		{#if total}
			<h4>Account Summary</h4>
			<Summary portfolio={total} />
		{/if}
	</div>
</Container>
