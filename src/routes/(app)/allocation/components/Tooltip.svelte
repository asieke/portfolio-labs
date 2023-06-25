<script lang="ts">
	import type { AssetAllocationRow } from '$lib/types';
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';

	export let color: string;
	export let status: boolean = true;

	export let data: {
		category: string;
		label: string;
		value: number;
		color: string;
		width?: string;
		pct?: string;
	}[];

	console.log(data);
</script>

<div class="tooltip {color} {status ? '' : 'hidden'}">
	<table>
		<tbody>
			<tr>
				<td colspan="3" class="text-left border-b">{data[0].category} allocation</td>
			</tr>
			{#each data as row}
				<tr>
					<td class="text-left">{row.label}</td>
					<td class="text-right">{formatCurrency(row.value)}</td>
					<td class="text-right">{row.pct}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="arrow-container">
		<div class="arrow {color}" />
	</div>
</div>

<style>
	.tooltip {
		@apply absolute w-[240px] top-[124px] shadow-lg rounded-b-lg rounded-tl-lg right-0 p-2;
	}

	.arrow-container {
		@apply absolute w-3 h-3 top-[-12px] right-0 overflow-hidden;
	}

	.arrow {
		@apply absolute w-6 h-6 rotate-45 left-[5px];
	}

	table {
		@apply font-light w-full;
	}

	td {
		@apply py-1 px-2;
	}

	/* make the last row in the table have a top border*/
	tr:last-child td {
		@apply border-t border-gray-200;
	}
</style>
