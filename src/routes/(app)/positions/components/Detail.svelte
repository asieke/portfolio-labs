<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Container } from '$components/layout';
	import { onMount } from 'svelte';
	import { getAsset } from '$models/assets';
	import { page } from '$app/stores';
	import { AssetClassPieChart } from '$components/chart';
	import type { Asset } from '$types/assets';
	import type { Position } from '$types/positions';
	import { getPositionBySymbol } from '$models/positions';
	import DetailPosition from './DetailPosition.svelte';
	import DetailAsset from './DetailAsset.svelte';

	const { supabase, session } = $page.data;

	export let asset: Asset | null;
	export let position: Position | null;
	export let onClick = () => {};
</script>

<Container layout="right">
	<div slot="left">
		<h4>
			<button on:click={onClick}>Positions</button>
			<span class="mx-2">&gt;</span>
			<span>{asset?.symbol}</span>
		</h4>
		{#if asset && position && position.asset_class}
			<DetailAsset {asset} />
		{:else}
			<p>...Loading</p>
		{/if}
	</div>
	<div slot="right">
		<h4>My Position</h4>
		{#if asset && position && position.asset_class}
			<DetailPosition {position} />
			<h4 class="mt-4">Asset Allocation</h4>
			<AssetClassPieChart data={position.asset_class} />
		{:else}
			<p>...Loading</p>
		{/if}
	</div>
</Container>
