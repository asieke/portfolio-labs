<script lang="ts">
	import type { Balance } from '$types/balances';
	import { getReturn } from '$models/balances';
	import { formatPercent, color, formatCurrency } from '$lib/utils/format';
	import { balanceDisplayData, chartSelectedDate } from '$lib/stores/performanceChart';

	// Define the prop for the component
	export let balances: Balance[];

	$: filteredData = balances.filter((b) => b.date >= $chartSelectedDate);
	$: start = filteredData[0];
	$: end = filteredData[filteredData.length - 1];

	let pct: Record<string, number> = {};
	let gain: Record<string, number> = {};

	$: {
		balanceDisplayData.forEach((label) => {
			const pcts = filteredData.map((b) => b.benchmark_returns[label.name]);
			pct[label.name] = getReturn(pcts);

			const ratio = start.end_balance / start.end_benchmarks[label.name];
			const v1 = ratio * start.end_benchmarks[label.name];
			const v2 = ratio * end.end_benchmarks[label.name];

			gain[label.name] = ratio * (end.end_benchmarks[label.name] - start.end_benchmarks[label.name]);
		});

		pct['Your Performance'] = getReturn(filteredData.map((b) => b.pct));
		gain['Your Performance'] = end.end_balance - start.end_balance;
	}
</script>

<div class="mt-6">
	<!-- Create a table that has a row for every value in balanceDisplayData and a bg color -->
	<!-- that corresponds to the color in balanceDisplayData -->
	{#each balanceDisplayData as label, i}
		<div class="flex items-center justify-between py-1 text-xs">
			<div class="">
				<div class="h-3 w-3" style="background-color: {label.color}" />
			</div>
			<div class="w-5/12 text-left"><span>{label.name}</span></div>
			<div class="w-3/12 text-center"><span>{formatCurrency(gain[label.name])}</span></div>
			<div class="w-3/12 text-right {color(pct[label.name])}">{formatPercent(pct[label.name])}</div>
		</div>
		{#if label.name === 'Your Performance'}
			<hr class="my-2 border-slate-700 dark:border-slate-300" />
		{/if}
	{/each}
</div>
