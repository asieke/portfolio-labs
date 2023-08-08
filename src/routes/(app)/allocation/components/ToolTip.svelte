<script lang="ts">
	import { formatPercent, formatCurrency } from '$lib/utils/format';
	import type { AssetClass } from '$types/assets';

	export let asset: AssetClass;
</script>

<!-- Create a small triagle in the upper right of this with the same color -->

<table class="m-0">
	<tbody>
		<tr class="border-b">
			<td colspan="2" class="text-left">{asset.name}</td>
			<td class="text-right">{formatCurrency(asset.total, 0)}</td>
		</tr>
		{#each asset.breakdown as row}
			<tr>
				<td><div style="background-color: {row.color}" class="h-2 w-2" /></td>
				<td class="text-left">{row.name}</td>
				<td class="text-right">{formatCurrency(row.total, 0)}</td>
				<td class="text-right">{formatPercent(row.total / asset.total, 1)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	table {
		@apply w-full text-xs font-light;
	}

	td {
		@apply px-2 py-1 font-normal text-white dark:text-white;
	}
</style>
