<script lang="ts">
	import type { Balance } from '$types/balances';
	import { aggregateBalances } from '$models/balances';
	import { chartSelectedDate } from '$lib/stores/performanceChart';
	import { color, formatCurrency, formatPercent } from '$lib/utils/format';
	export let balances: Balance[];
	$: tableData = aggregateBalances(balances.filter((b) => b.date >= $chartSelectedDate));
</script>

<table class="data">
	<thead>
		<tr>
			<th>Date</th>
			<th>Starting</th>
			<th>Ending</th>
			<th>Flows</th>
			<th>G/L</th>
		</tr>
	</thead>
	<tbody>
		{#each tableData as row}
			<tr>
				<td>{row.date}</td>
				<td>{formatCurrency(row.start_balance, 0)}</td>
				<td>{formatCurrency(row.end_balance, 0)}</td>
				<td>{formatCurrency(row.total_flows, 0)}</td>
				<td class={color(row.pct)}>{formatPercent(row.pct, 0)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	.row {
		@apply flex items-center justify-between border-t-[1px] border-b-slate-300 px-2 py-1.5 text-xs text-slate-500 dark:text-slate-400;
	}
	.row:last-child {
		@apply border-none;
	}
</style>
