<script lang="ts">
	import ToolTip from './ToolTip.svelte';
	import type { AssetClass } from '$types/assets';
	import { roundToSum } from '$lib/utils/numbers';
	import { formatPercent, formatCurrency } from '$lib/utils/format';
	import { onMount, afterUpdate } from 'svelte';
	import { hexToRGBA } from '$lib/utils/colors';

	export let data: AssetClass[] = [];

	type DisplayAssetClass = AssetClass & {
		width: number;
		breakdown: {
			name: string;
			color?: string;
			total: number;
			width: number;
		}[];
	};

	let display: DisplayAssetClass[] = [];
	let tooltips: boolean[];
	let total = data.reduce((a, b) => a + b.total, 0);

	$: {
		display = data.map((asset, i) => ({
			...asset,
			width: roundToSum(data.map((a) => (100 * a.total) / data.reduce((a, b) => a + b.total, 0)))[i],
			breakdown: asset.breakdown.map((breakdown, j) => ({
				...breakdown,
				width: roundToSum(asset.breakdown.map((a) => (100 * a.total) / asset.breakdown.reduce((a, b) => a + b.total, 0)))[j]
			}))
		}));

		total = display.reduce((a, b) => a + b.total, 0);
		tooltips = display.map(() => false);
		console.log(display);
	}

	const toolTipOn = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? true : t));
	};

	const toolTipOff = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? false : t));
	};
</script>

<div class="my-8 py-8">
	<div class="my-8 flex h-[50px] w-full flex-row">
		{#each display as asset, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="relative" style="width: {asset.width}%;">
				{#if asset.width > 0}
					<button class="h-12 w-full hover:opacity-80" style="background-color: {asset.color}" on:mouseenter={() => toolTipOn(i)} on:mouseleave={() => toolTipOff(i)}>
						<div class="flex h-6 w-full flex-row">
							{#each asset.breakdown as ab}
								<div class="h-6" style="width: {ab.width}%; background-color: {ab.color}" />
							{/each}
						</div>
					</button>
					<button class="label" style="background-color: {asset.color}; top: {i % 2 === 0 ? '-50px' : '52px'}; right: {i > 0 ? '0px' : ''}">
						{asset.name}<br />
						{formatCurrency(asset.total, 0)} ({formatPercent(asset.total / total, 1)})
					</button>
				{/if}
				{#if tooltips[i]}
					<div class="tooltip z-10" style="background-color: {asset.color}; top: 52px; right: {i > 0 ? '0px' : ''}">
						<ToolTip {asset} />
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.label {
		@apply absolute flex h-[48px] w-[120px] items-center justify-center text-center text-xs text-white;
	}

	.tooltip {
		@apply absolute min-h-[100px] w-[240px]  p-3 shadow-md;
	}
</style>
