<script lang="ts">
	import ToolTip from './ToolTip.svelte';
	import type { AssetClass } from '$types/assets';
	import { roundToSum } from '$lib/utils/numbers';
	import { formatPercent, formatCurrency } from '$lib/utils/format';

	export let data: AssetClass[] = [];
	const total = data.reduce((a, b) => a + b.total, 0);

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

	$: {
		display = data.map((asset, i) => ({
			...asset,
			width: roundToSum(data.map((a) => (100 * a.total) / data.reduce((a, b) => a + b.total, 0)))[i],
			breakdown: asset.breakdown.map((breakdown, j) => ({
				...breakdown,
				width: roundToSum(asset.breakdown.map((a) => (100 * a.total) / asset.breakdown.reduce((a, b) => a + b.total, 0)))[j]
			}))
		}));

		tooltips = display.map(() => false);
	}

	const toolTipOn = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? true : t));
	};

	const toolTipOff = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? false : t));
	};
</script>

<div class="mb-8 mt-8 flex h-32 w-full flex-row">
	{#each display as asset, i}
		<button class="relative h-full" style="width: {asset.width}%" on:mouseenter={() => toolTipOn(i)} on:mouseleave={() => toolTipOff(i)}>
			<div class="cell relative h-16 w-full" style="background-color: {asset.color}">
				{#if asset.width > 5}
					<div class="absolute -top-2 z-10 w-[100px] rounded-sm bg-black p-2 text-white opacity-80">
						{asset.name}<br />
						{formatPercent(asset.total / total, 1)}<br />
						{formatCurrency(asset.total, 0)}
					</div>
				{/if}
			</div>
			<div class="flex h-16 w-full flex-row">
				{#each asset.breakdown as ab}
					<div class="cell h-full" style="width: {ab.width}%; background-color: {ab.color}">
						{ab.width * asset.width > 800 ? ab.name : ''}<br />
						{ab.width * asset.width > 200 ? formatPercent(ab.total / asset.total, 1) : ''}
					</div>
				{/each}
			</div>
			{#if tooltips[i]}
				<ToolTip {asset} />
			{/if}
		</button>
	{/each}
</div>

<style>
	div {
		@apply flex items-center justify-center align-middle text-xs font-semibold;
	}
</style>
