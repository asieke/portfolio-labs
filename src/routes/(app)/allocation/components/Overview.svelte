<script lang="ts">
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';
	import type { AssetAllocationRow } from '$lib/types';
	import Chart from './Chart.svelte';

	export let rows: AssetAllocationRow[];

	export let showDetail: (i: number) => void;
</script>

<div class="sm:flex-auto mb-10">
	<h1 class="text-base font-semibold leading-6 text-gray-900">Asset Allocation</h1>
	<p class="mt-2 text-sm text-gray-700">Total Asset Allocation</p>
</div>
<Chart detailRow={rows[rows.length - 1]} display="chart" />
<table class="asset-table">
	<thead>
		<tr class="total">
			<th class="bg-slate-500">Portfolio</th>
			<th class="bg-slate-500">Market Value</th>
			<th class="bg-cyan-500">Equity</th>
			<th class="bg-cyan-500">%</th>
			<th class="bg-blue-500">Fixed Income</th>
			<th class="bg-blue-500">%</th>
			<th class="bg-green-500">Real Estate</th>
			<th class="bg-green-500">%</th>
			<th class="bg-yellow-500">Other</th>
			<th class="bg-yellow-500">%</th>
		</tr>
	</thead>
	<tbody>
		{#each rows as row, i}
			<tr class={row.name === 'Total' ? 'total' : ''}>
				<td><button on:click={() => showDetail(i)}>{row.name}</button></td>
				<td>{formatCurrency(row.market_value)}</td>
				<td class="bg-cyan-50">{formatCurrency(row.asset_class.equity.total)}</td>
				<td class="bg-cyan-50">{formatPercent(row.asset_class.equity.total / row.market_value)}</td>
				<td class="bg-blue-50">{formatCurrency(row.asset_class.fixedIncome.total)}</td>
				<td class="bg-blue-50"
					>{formatPercent(row.asset_class.fixedIncome.total / row.market_value)}</td
				>
				<td class="bg-green-50">{formatCurrency(row.asset_class.realEstate.total)}</td>
				<td class="bg-green-50"
					>{formatPercent(row.asset_class.realEstate.total / row.market_value)}</td
				>
				<td class="bg-yellow-50">{formatCurrency(row.asset_class.other.total)}</td>
				<td class="bg-yellow-50">{formatPercent(row.asset_class.other.total / row.market_value)}</td
				>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	.total {
		@apply bg-gray-100;
	}

	button {
		@apply hover:underline;
	}

	table {
		@apply min-w-full divide-y divide-gray-300 mt-5;
	}

	tbody {
		@apply divide-y divide-gray-200;
	}

	td {
		@apply whitespace-nowrap p-4 text-sm text-gray-500;
	}

	tr {
		@apply divide-x divide-gray-200;
	}

	th {
		@apply px-3 py-3 text-left text-sm font-semibold text-white;
	}
</style>
