<script lang="ts">
	import { Container } from '$components/layout';
	import Table from './components/Table.svelte';
	import Summary from './components/Summary.svelte';

	export let data;
	const { balances, portfolios } = data;
	const total = portfolios ? portfolios[portfolios.length - 1] : null;

	console.log(total);

	console.log(balances, portfolios);
</script>

<Container layout="right">
	<div slot="left">
		{#if balances && portfolios}
			<Table {portfolios} />
		{/if}
	</div>

	<div slot="right">
		{#if total}
			<Summary portfolio={total} />
		{/if}
	</div>
</Container>
