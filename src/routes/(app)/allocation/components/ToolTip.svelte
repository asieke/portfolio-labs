<script lang="ts">
	import { formatPercent, formatCurrency } from '$lib/utils/format';

	export let asset: {
		name: string;
		total: number;
		color: string;
		breakdown: {
			name: string;
			total: number;
			color: string;
		}[];
	};
</script>

<!-- Create a small triagle in the upper right of this with the same color -->

<div class="absolute right-0 top-[128px] min-h-[20px] w-[240px]">
	<div class="absolute right-0 top-0 h-[12px] w-[12px] overflow-hidden">
		<div class="absolute -right-[17px] top-0 h-[24px] w-[24px] rotate-45 transform" style="background-color: {asset.color}" />
	</div>

	<div class="absolute right-0 top-[12px] w-[240px] rounded-b-lg rounded-tl-lg p-2 shadow-lg" style="background-color: {asset.color}">
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
	</div>
</div>

<style>
	table {
		@apply w-full text-xs font-light;
	}

	td {
		@apply px-2 py-1 text-white;
	}
</style>
