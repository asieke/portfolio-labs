<script lang="ts">
	import { color, formatPercent } from '$lib/utils/format';
	import Highcharts from 'highcharts/highstock';
	import type { Balance } from '$types/balances';
	import { chartDates, chartSelectedDate, chartSelectedBenchmarks, balanceDisplayData } from '$lib/stores/performanceChart';
	import DatePicker from './DatePicker.svelte';
	import BenchmarkPicker from './BenchmarkPicker.svelte';
	import { getReturn } from '$models/balances';

	// Define the prop for the component
	export let balances: Balance[];
	export let options: {
		datePicker?: boolean;
		benchmarkPicker?: boolean;
	} = {};
	const { datePicker = true, benchmarkPicker = true } = options;

	const defaultBenchmark = 'US Equity Total Market';

	// Initialize the selected date and benchmarks using data from the store
	chartSelectedDate.set(balances[0].date);
	chartSelectedBenchmarks.set(balanceDisplayData.map((d) => (d.name === defaultBenchmark ? true : false)));
	chartDates[0].value = balances[0].date;

	// Create a reactive statement to update displayBalances when chartSelectedDate changes
	// This reactive statement will reassign displayBalances each time chartSelectedDate or balances change
	let displayBalances: Balance[];
	let data: Highcharts.SeriesLineOptions[] = [];
	let performancePct: number;
	let benchmarkPct: number;

	$: {
		displayBalances = [...balances].filter((b) => b.date > $chartSelectedDate);

		console.log(displayBalances);

		performancePct = 11; //getReturn(displayBalances.map((b) => b.pct));
		benchmarkPct = 11; //getReturn(displayBalances.map((b) => b.benchmark_returns[defaultBenchmark]));

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
			drawChart();
		}
	}

	// Initialize container and chart variables
	let container: HTMLElement;
	let chart: Highcharts.Chart | null = null;

	// Define function for getting chart data

	// Define function for drawing the chart
	const drawChart = () => {
		chart = Highcharts.stockChart(container, {
			chart: {
				backgroundColor: undefined,
				plotBorderWidth: undefined
			},
			rangeSelector: {
				enabled: false
			},
			title: {},
			series: data,
			tooltip: {
				valueDecimals: 2,
				valuePrefix: '$'
			},
			credits: {
				enabled: false
			},
			xAxis: {
				labels: {
					style: {
						color: '#aaa',
						fontSize: '12px'
					}
				},
				lineColor: '#707073',
				tickColor: '#707073'
			},
			yAxis: {
				labels: {
					style: {
						color: '#aaa'
					},
					formatter: function () {
						return '$' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			}
		});
	};
</script>

<!-- Display the selected date -->
<h3>My Performance: <span class={color(performancePct)}>{formatPercent(performancePct)}</span></h3>
<p>
	vs US Total Equity Benchmark: <span class={color(benchmarkPct)}>{formatPercent(benchmarkPct)}</span>
	<span>({(performancePct / benchmarkPct).toFixed(1)}x)</span>
</p>

<!-- Include date picker and benchmark picker components, redraw chart on date change -->
{#if datePicker}
	<DatePicker />
{/if}

<!-- Container for the Highcharts chart -->
<div class="h-[440px]" bind:this={container} />

<!-- Include benchmark picker component -->
{#if benchmarkPicker}
	<BenchmarkPicker />
{/if}
