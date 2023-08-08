<script lang="ts">
	import { color, formatPercent } from '$lib/utils/format';
	import { getCAGR } from '$lib/utils/financial';
	import { drawChart } from '$lib/chart/lineChart';
	import type { Balance } from '$types/balances';
	import { chartDates, chartSelectedDate, chartSelectedBenchmarks, balanceDisplayData } from '$lib/stores/performanceChart';
	import DatePicker from './DatePicker.svelte';
	import BenchmarkPicker from './BenchmarkPicker.svelte';
	import { getReturn } from '$models/balances';
	import { BenchmarkTable } from '$components/chart';

	// Define the prop for the component
	export let balances: Balance[];

	const defaultBenchmark = 'US Equity Total Market';

	// Initialize the selected date and benchmarks using data from the store
	chartSelectedDate.set(balances[0].date);
	chartSelectedBenchmarks.set(balanceDisplayData.map((d, i) => (i === 0 || d.name === defaultBenchmark ? true : false)));
	chartDates[0].value = balances[0].date;

	// Create a reactive statement to update displayBalances when chartSelectedDate changes
	// This reactive statement will reassign displayBalances each time chartSelectedDate or balances change
	let displayBalances: Balance[];
	let data: Highcharts.SeriesLineOptions[] = [];
	let performancePct: number;
	let benchmarkPct: number;

	$: benchmarkBalances = [...displayBalances].filter((b) => b.date <= '2099-01-01');

	const onMouseOver = (x: number) => {
		const date = new Date(x).toISOString().split('T')[0];
		benchmarkBalances = [...displayBalances].filter((b) => b.date <= date);
		if (benchmarkBalances.length === 0) {
			benchmarkBalances = [displayBalances[0]];
		}
	};

	const onMouseOut = () => {
		benchmarkBalances = [...displayBalances];
	};

	$: {
		displayBalances = [...balances].filter((b) => b.date >= $chartSelectedDate);
		performancePct = getReturn(displayBalances.map((b) => b.pct));
		benchmarkPct = getReturn(displayBalances.map((b) => b.benchmark_returns[defaultBenchmark]));

		const temp = [
			{
				name: 'Your Performance',
				data: displayBalances.map((b) => [new Date(b.date).getTime(), b.end_balance] as [number, number]),
				lineWidth: 4,
				dashStyle: 'Solid' as Highcharts.DashStyleValue,
				color: balanceDisplayData[0].color,
				type: 'line' as 'line'
			}
		];
		balanceDisplayData.forEach((label, i) => {
			if (!$chartSelectedBenchmarks[i]) return;
			const baseline = displayBalances[0].end_balance / displayBalances[0].end_benchmarks[label.name];
			temp.push({
				name: label.name,
				data: displayBalances.map((b) => [new Date(b.date).getTime(), baseline * b.end_benchmarks[label.name]] as [number, number]),
				lineWidth: 1,
				dashStyle: 'Dash' as Highcharts.DashStyleValue,
				color: label.color,
				type: 'line' as 'line'
			});
		});
		data = temp;

		if (container) {
			drawChart({ container, data, onMouseOver, onMouseOut, showY: false, color: balanceDisplayData[0].color });
		}
	}

	let container: HTMLElement;
</script>

<!-- Display the selected date -->
<section class="mb-8 space-y-3">
	<h4>My Total Performance: <span class={color(performancePct)}>{formatPercent(performancePct)}</span></h4>
	<p>CAGR: {formatPercent(getCAGR(performancePct, $chartSelectedDate))}</p>
	<p>
		US Total Equity Benchmark: <span class={color(benchmarkPct)}>{formatPercent(benchmarkPct)}</span>
		<span>({formatPercent(Math.abs(performancePct / benchmarkPct - 1))} {performancePct > benchmarkPct ? 'higher' : 'lower'})</span>
	</p>
</section>

<DatePicker />
<div class="h-[440px]" bind:this={container} />
<BenchmarkPicker />
<BenchmarkTable balances={displayBalances.length - benchmarkBalances.length >= 2 ? benchmarkBalances : displayBalances} />
