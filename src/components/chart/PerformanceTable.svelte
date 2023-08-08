<script lang="ts">
	import type { Balance } from '$types/balances';
	import { aggregateBalances } from '$models/balances';
	import { chartSelectedDate } from '$lib/stores/performanceChart';
	import { color, formatCurrency, formatPercent } from '$lib/utils/format';
	export let balances: Balance[];
	$: tableData = aggregateBalances(balances.filter((b) => b.date >= $chartSelectedDate));
</script>

<div class="flex items-center justify-between rounded-tl-md rounded-tr-md bg-primary-600 px-2 py-2 text-xs font-bold text-white dark:bg-primary-700">
	<div class="w-2/12"><span>Date</span></div>
	<div class="w-2/12 text-left"><span>Starting</span></div>
	<div class="w-2/12 text-left"><span>Ending</span></div>
	<div class="w-2/12 text-left"><span>Net Flows</span></div>
	<div class="w-2/12 text-left"><span>G/L</span></div>
</div>
{#each tableData as row}
	<div class="row">
		<div class="w-2/12"><span>{row.date}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.start_balance, 0)}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.end_balance, 0)}</span></div>
		<div class="w-2/12 text-left"><span>{formatCurrency(row.total_flows, 0)}</span></div>
		<div class="w-2/12 text-left"><span class={color(row.pct)}>{formatPercent(row.pct, 0)}</span></div>
	</div>
{/each}

<style lang="postcss">
	.row {
		@apply flex items-center justify-between border-t-[1px] border-b-slate-300 px-2 py-1.5 text-xs text-slate-500 dark:text-slate-400;
	}
	.row:last-child {
		@apply border-none;
	}
</style>
