<script lang="ts">
	import type { Balance } from '$types/balances';
	import { aggregateBalances } from '$models/balances';
	import { chartSelectedDate } from '$lib/stores/performanceChart';
	import { color, formatCurrency, formatPercent } from '$lib/utils/format';
	export let balances: Balance[];
	$: tableData = aggregateBalances(balances.filter((b) => b.date >= $chartSelectedDate));
	$: console.log(tableData);
</script>

<h4>Performance Summary</h4>

<div class="flex items-center justify-between rounded-tl-md rounded-tr-md bg-primary-600 px-2 py-2 text-xs font-bold dark:bg-primary-700">
	<div class="w-2/12"><span>Date</span></div>
	<div class="w-2/12 text-left"><span>Starting Balance</span></div>
	<div class="w-2/12 text-left"><span>Ending Balance</span></div>
	<div class="w-2/12 text-left"><span>Net Inflows</span></div>
	<div class="w-2/12 text-left"><span>Performance</span></div>
</div>
{#each tableData as row}
	<div class="row">
		<div class="w-2/12"><span>{row.date}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.start_balance)}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.end_balance)}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.total_flows)}</span></div>
		<div class="w-2/12 text-left"><span class={color(row.pct)}>{formatPercent(row.pct)}</span></div>
	</div>
{/each}

<style>
	.row {
		@apply flex items-center justify-between border-b-[1px] border-b-slate-500 px-2 py-1.5 text-xs;
	}
	.row:last-child {
		@apply border-none;
	}
</style>
