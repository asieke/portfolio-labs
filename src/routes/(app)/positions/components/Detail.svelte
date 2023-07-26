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

	export let symbol: string;
	export let onClick = () => {};

	let asset: Asset | null;
	let position: Position | null;

	onMount(async () => {
		asset = await getAsset($page.data.supabase, symbol);
		position = await getPositionBySymbol(supabase, session?.user?.id, symbol);
	});
</script>

{#if asset && position && position.asset_class}
	<div transition:fade={{ duration: 150 }}>
		<Container layout="right">
			<div slot="left">
				<h3>
					<button on:click={onClick}>Positions</button>
					<span class="mx-2">&gt;</span>
					<span>{symbol}</span>
				</h3>
				<DetailAsset {asset} />
			</div>
			<div slot="right">
				<h3>My Position</h3>
				<DetailPosition {position} />
				<h3 class="mt-4">Asset Allocation</h3>
				<AssetClassPieChart data={position.asset_class} />
			</div>
		</Container>
	</div>
{:else}
	<Container>
		<h3>Loading...</h3>
	</Container>
{/if}
