<script lang="ts">
	import type { AssetAllocationRow } from '$lib/types';
	import { Container } from '$components/layout';
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';
	import Overview from './components/Overview.svelte';
	import Detail from './components/Detail.svelte';

	export let data;
	const { account } = data;

	let state: 'error' | 'overview' | 'detail' = 'overview';

	const rows = [
		...account?.portfolios,
		{ name: 'Total', market_value: account?.market_value, asset_class: account?.asset_class }
	];

	let detailRow = rows[0];

	if (rows.length === 0) {
		state = 'error';
	}

	const goBack = () => {
		state = 'overview';
	};

	const showDetail = (i: number) => {
		state = 'detail';
		detailRow = rows[i];
	};
</script>

<Container>
	{#if state === 'overview'}
		<Overview {rows} {showDetail} />
	{/if}
	{#if state === 'detail'}
		<Detail {detailRow} {goBack} />
	{/if}
	{#if state === 'error'}
		<p>There was an error loading the data.</p>
	{/if}
</Container>
