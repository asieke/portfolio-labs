<script lang="ts">
	import { Container } from '$components/layout';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { AssetClassPieChart } from '$components/chart';
	import type { Asset } from '$types/assets';
	import type { Position } from '$types/positions';
	import type { Price } from '$types/prices';
	import DetailPosition from './DetailPosition.svelte';
	import DetailAsset from './DetailAsset.svelte';
	import { getPrices } from '$models/prices';
	import { PriceChart } from '$components/chart';

	const { supabase } = $page.data;

	export let asset: Asset | null;
	export let position: Position | null;
	export let onClick = () => {};
	let prices: Price[];

	onMount(async () => {
		if (asset && asset.symbol) {
			prices = await getPrices(supabase, asset.symbol);
		}
	});
</script>

<Container layout="right">
	<div slot="left">
		<h3>
			<button on:click={onClick}>Positions</button>
			<span class="mx-2">&gt;</span>
			<span>{asset?.symbol}</span>
		</h3>
		{#if asset && position && position.asset_class}
			<DetailAsset {asset} />
		{/if}
		{#if prices && asset}
			<h4 class="mt-8">Historical Prices: {asset.name}</h4>
			<p class="mb-6 text-slate-500 dark:text-slate-400">Hypothetical growth of a $10,000 Investment</p>
			<PriceChart {prices} />
		{/if}
	</div>
	<div slot="right">
		<h4>My Position</h4>
		{#if asset && position && position.asset_class}
			<DetailPosition {position} />
			<h4 class="mb-6 mt-8">Asset Allocation</h4>
			<AssetClassPieChart data={position.asset_class} />
		{/if}
	</div>
</Container>
