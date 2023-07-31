<script lang="ts">
	import ToolTip from './ToolTip.svelte';
	import type { AssetClass } from '$types/assets';
	import { roundToSum } from '$lib/utils/numbers';
	import { formatPercent } from '$lib/utils/format';

	export let data: AssetClass[] = [];
	const total = data.reduce((a, b) => a + b.total, 0);

	const display = data.map((asset, i) => ({
		...asset,
		width: roundToSum(data.map((a) => (100 * a.total) / data.reduce((a, b) => a + b.total, 0)))[i],
		breakdown: asset.breakdown.map((breakdown, j) => ({
			...breakdown,
			width: roundToSum(asset.breakdown.map((a) => (100 * a.total) / asset.breakdown.reduce((a, b) => a + b.total, 0)))[j]
		}))
	}));

	let tooltips = display.map(() => false);
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
			<div class="cell h-16 w-full" style="background-color: {asset.color}">
				{asset.width > 5 ? asset.name : ''}<br />{asset.width > 5 ? formatPercent(asset.total / total, 1) : ''}
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
		@apply flex items-center justify-center align-middle text-xs font-semibold text-slate-900;
	}
</style>
