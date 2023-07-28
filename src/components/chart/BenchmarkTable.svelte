<script lang="ts">
	import type { Balance } from '$types/balances';
	import { getReturn } from '$models/balances';
	import { formatPercent, color, formatCurrency } from '$lib/utils/format';
	import { hexToRGBA } from '$lib/utils/colors';
	import { balanceDisplayData, chartSelectedBenchmarks } from '$lib/stores/performanceChart';

	// Define the prop for the component
	export let balances: Balance[];

	// $: filteredData = [...balances];
	$: start = balances[0];
	$: end = balances.length >= 2 ? balances[balances.length - 1] : balances[0];

	let pct: Record<string, number> = {};
	let gain: Record<string, number> = {};
	let bal: Record<string, number[]> = {};

	$: {
		try {
			balanceDisplayData.forEach((label) => {
				const pcts = balances.map((b) => b.benchmark_returns[label.name]);
				pct[label.name] = balances.length >= 2 ? getReturn(pcts) : 0;

				const ratio = balances.length >= 2 ? start.end_balance / start.end_benchmarks[label.name] : 1;
				gain[label.name] = balances.length >= 2 ? ratio * (end.end_benchmarks[label.name] - start.end_benchmarks[label.name]) : 0;
				bal[label.name] = balances.length >= 2 ? [start.end_balance, ratio * end.end_benchmarks[label.name]] : [start.end_balance, start.end_balance];
			});

			pct['Your Performance'] = balances.length >= 2 ? getReturn(balances.map((b) => b.pct)) : 0;
			gain['Your Performance'] = end.end_balance - start.end_balance;
			bal['Your Performance'] = [start.end_balance, end.end_balance];
		} catch (err) {
			console.log(err);
		}
	}
</script>

<div class="mt-6">
	<!-- Create a table that has a row for every value in balanceDisplayData and a bg color -->
	<!-- that corresponds to the color in balanceDisplayData -->

	<div class="flex items-center justify-between rounded-tl-md rounded-tr-md bg-primary-600 p-2 text-sm font-semibold text-white dark:bg-primary-700">
		<div class="w-1/12"><div class="h-3 w-3" /></div>
		<div class="w-3/12 text-left"><span>Benchmark</span></div>
		<div class="w-2/12 text-left"><span>Initial</span></div>
		<div class="w-2/12 text-left"><span>Final</span></div>
		<div class="w-2/12 text-left"><span>Gain</span></div>
		<div class="w-2/12 text-left"><span>Percentage</span></div>
	</div>
	{#each balanceDisplayData as label, i}
		{#if $chartSelectedBenchmarks[i] === true}
			<div class="row flex items-center justify-between p-2 text-sm">
				<div class="w-1/12">
					<div class="h-3 w-3" style="background-color: {label.color}" />
				</div>
				<div class="w-3/12 text-left"><span>{label.name}</span></div>
				<div class="w-2/12 text-left"><span>{formatCurrency(bal[label.name][0], 0)}</span></div>
				<div class="w-2/12 text-left"><span>{formatCurrency(bal[label.name][1], 0)}</span></div>
				<div class="w-2/12 text-left {color(gain[label.name])}"><span>{formatCurrency(gain[label.name], 0)}</span></div>
				<div class="w-2/12 text-left {color(pct[label.name])}">{formatPercent(pct[label.name])}</div>
			</div>
		{/if}
	{/each}
</div>

<style>
	/* row but not the last row*/
	.row:not(:last-child) {
		@apply border-b-[1px] border-b-slate-500;
	}
</style>
