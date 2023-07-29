<script lang="ts">
	import { Container } from '$components/layout';
	import ToolTip from './components/ToolTip.svelte';
	import TableRow from './components/TableRow.svelte';
	import { roundToSum } from '$lib/utils/numbers';

	export let data;

	const { portfolios } = data;
	const targets = data.profile?.allocation_targets || [];

	let portfolio_id = portfolios?.[0]?.id || null;

	//set portfolio to data.portfolios[0] in one line
	$: portfolio = portfolios?.find((p) => p.id === portfolio_id) || null;
	$: assets = portfolio?.asset_class || null;

	$: console.log(portfolio);

	$: widths = roundToSum((assets || []).map((a) => (100 * a.total) / (portfolio?.market_value || 1)));

	//create a tooltips array with the same length as assets, all set to false
	$: tooltips = (assets || []).map((a) => false);

	const toolTipOn = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? true : t));
	};

	const toolTipOff = (i: number) => {
		tooltips = tooltips.map((t, j) => (i === j ? false : t));
	};

	$: display = assets?.map((a, i) => {
		let temp = roundToSum(a.breakdown.map((ab) => (100 * ab.total) / a.total));
		return {
			...a,
			width: widths[i],
			color: a.color || '#000000',
			breakdown: a.breakdown.map((ab, j) => ({
				...ab,
				width: temp[j],
				color: ab.color || '#000000'
			}))
		};
	});
</script>

<Container>
	<h4>My Asset Allocation</h4>

	{#if portfolios}
		<select class="w-full" bind:value={portfolio_id}>
			{#each portfolios as portfolio}
				<option value={portfolio.id}>{portfolio.name}</option>
			{/each}
		</select>
	{/if}

	<p>
		This table provides an overview of your current asset allocation and suggests adjustments to align with your target allocation. It allows you to easily compare your present investments across
		asset classes and subcategories with the proposed changes to achieve your investment goals. <a href="/settings/targets">Edit your target allocation.</a>.
	</p>

	{#if display}
		<div class="mb-8 mt-8 flex h-32 w-full flex-row">
			{#each display as asset, i}
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<button class="relative h-full" style="width: {asset.width}%" on:mouseenter={() => toolTipOn(i)} on:mouseleave={() => toolTipOff(i)}>
					<!-- Top Bar -->
					<div class="cell h-16 w-full" style="background-color: {asset.color}">
						{asset.width > 10 ? asset.name : ''}
					</div>
					<!-- Asset Breakdown Detail -->
					<div class="flex h-16 w-full flex-row">
						{#each asset.breakdown as ab}
							<div class="cell h-full" style="width: {ab.width}%; background-color: {ab.color}">
								{ab.width * asset.width > 800 ? ab.name : ''}
							</div>
						{/each}
					</div>
					<!-- Tooltip -->
					{#if tooltips[i]}
						<ToolTip {asset} />
					{/if}
				</button>
			{/each}
		</div>

		<div class="flex items-center justify-between rounded-tl-md rounded-tr-md bg-slate-600 px-2 py-2 text-xs dark:bg-slate-700">
			<div class="w-1/12 text-left"><span class="text-white" /></div>
			<div class="w-2/12 text-left"><span class="text-white">Asset Class</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Category</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Total Amount</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Percent</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Target Percent</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Target $$</span></div>
			<div class="w-2/12 text-left"><span class="text-white">Asset Delta</span></div>
		</div>
		{#each display as row}
			{#each row.breakdown as asset}
				<TableRow label={row.name} {asset} bgcolor={row.color} total={display.reduce((a, b) => a + b.total, 0)} {targets} />
			{/each}
			<TableRow label="Total" asset={row} bgcolor={row.color} total={display.reduce((a, b) => a + b.total, 0)} {targets} />
		{/each}
	{/if}
</Container>

<style>
	button {
		@apply cursor-default;
	}

	.cell {
		@apply flex items-center justify-center text-xs;
	}
</style>
