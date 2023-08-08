<script lang="ts">
	import type { AssetClass } from '$types/assets';
	import { formatCurrency, formatPercent } from '$lib/utils/format';
	import { color } from '$lib/utils/format';

	export let data: AssetClass[] = [];
	export let targets: AssetClass[] = [];

	let total = 0;

	const augmentAsset = (data: AssetClass[]) => {
		return data.map((assetClass) => {
			const classTarget = (targets.find((t) => t.name === assetClass.name)?.total || 0) / 100;
			return {
				...assetClass,
				breakdown: [
					...assetClass.breakdown.map((assetCategory) => {
						const categoryTarget = (targets.find((t) => t.name === assetClass.name)?.breakdown.find((b) => b.name === assetCategory.name)?.total || 0) / 100;
						return {
							...assetCategory,
							targetPct: categoryTarget,
							targetPctTotal: categoryTarget * classTarget,
							targetDollar: categoryTarget * classTarget * total
						};
					}),
					{
						name: 'Total',
						total: assetClass.total,
						color: assetClass.color,
						targetPct: classTarget,
						targetPctTotal: classTarget,
						targetDollar: classTarget * total
					}
				]
			};
		});
	};

	let display = augmentAsset(data);

	$: {
		total = data.reduce((a, b) => a + b.total, 0);
		display = augmentAsset(data);
	}
</script>

<table>
	<tr class="bg-primary-700 text-slate-200">
		<td class="rounded-tl-lg" /><td>Asset Class</td>
		<td>Category</td>
		<td>Total Amount</td>
		<td>Percent</td>
		<td>Target Percent<br /> (of Asset Class)</td>
		<td>Target Percent<br /> (of Total)</td>
		<td>Target Dollar<br /></td>
		<td class="rounded-tr-lg">Asset Delta</td>
	</tr>

	{#each display as row}
		{#each row.breakdown as asset}
			<tr class={asset.name === 'Total' ? 'bg-slate-200 dark:bg-slate-700' : ''}>
				<td><div class="h-3 w-3" style="background-color: {asset.color}" /></td>
				<td>{row.name}</td>
				<td>{asset.name}</td>
				<td>{formatCurrency(asset.total, 0)}</td>
				<td>{formatPercent(asset.name === 'Total' ? asset.total / total : asset.total / row.total, 1)}</td>
				<td>{formatPercent(asset.targetPct, 1)}</td>
				<td>{formatPercent(asset.targetPctTotal, 1)}</td>
				<td>{formatCurrency(asset.targetDollar, 1)}</td>
				<td class={color(asset.targetDollar - asset.total)}>{formatCurrency(asset.targetDollar - asset.total, 0)}</td>
			</tr>
		{/each}
	{/each}
	<tr class="bg-slate-300 dark:bg-slate-800">
		<td />
		<td colspan="2">Total</td>
		<td>{formatCurrency(total)}</td>
		<td colspan="3" />
		<td>{formatCurrency(total)}</td>
		<td>{formatCurrency(0)}</td>
	</tr>
</table>

<style>
	table {
		@apply w-full;
	}

	td {
		@apply border-b-[1px] border-b-slate-500 px-2 py-3 text-left;
	}
</style>
