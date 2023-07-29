<script lang="ts">
	import { color, formatPercent } from '$lib/utils/format';
	import { getCAGR } from '$lib/utils/financial';
	import Highcharts from 'highcharts/highstock';
	import type { Balance } from '$types/balances';
	import { chartDates, chartSelectedDate, chartSelectedBenchmarks, balanceDisplayData } from '$lib/stores/performanceChart';
	import DatePicker from './DatePicker.svelte';
	import BenchmarkPicker from './BenchmarkPicker.svelte';
	import { getReturn } from '$models/balances';
	import { BenchmarkTable } from '$components/chart';

	// Define the prop for the component
	export let balances: Balance[];
	export let options: {
		datePicker?: boolean;
		benchmarkPicker?: boolean;
		benchmarkTable?: boolean;
	} = {};
	const { datePicker = true, benchmarkPicker = true, benchmarkTable = true } = options;

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

	const onChartMouseMove = (x: number) => {
		const date = new Date(x).toISOString().split('T')[0];
		benchmarkBalances = [...displayBalances].filter((b) => b.date <= date);
		if (benchmarkBalances.length === 0) {
			benchmarkBalances = [displayBalances[0]];
		}
	};

	const onChartMouseOut = () => {
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
			accessibility: {
				enabled: false
			},
			rangeSelector: {
				enabled: false
			},
			title: {},
			series: data,
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
				tickColor: '#707073',
				crosshair: {
					color: '#ccc',
					width: 1,
					dashStyle: 'Dash' as Highcharts.DashStyleValue
				}
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
			},
			tooltip: {
				positioner: function (labelWidth, labelHeight, point) {
					if (point.plotX < labelWidth / 2) {
						return { x: 0, y: 5 };
					} else if (point.plotX > this.chart.chartWidth - 10 - labelWidth / 2) {
						return { x: this.chart.chartWidth - labelWidth - 10, y: 5 };
					}

					return { x: point.plotX - labelWidth / 2, y: 5 };
				},
				enabled: true,
				formatter: function () {
					// Format the date using Highcharts.dateFormat function
					if (this.x === undefined || typeof this.x !== 'number') {
						return 'Error: Invalid date';
					}

					//calculate how many pixels away the y value is from the top of the chart
					let width = this.point.series.chart.plotWidth || (0 as number);
					let x = this.point.plotX || (0 as number);
					let y = this.point.plotY || (0 as number);

					// let x = this.point.plotX < 54 ? this.point.plotX + 4 : 54;

					let left = 0;
					if (x < 52) left = x + 2;
					else if (width - x < 46) left = 92 - (width - x);
					else left = 52;

					let top = y - 10;

					return `
            <div class='z-2 w-[100px] text-center px-3 py-2 shadow rounded-full text-xs dark:bg-slate-600 bg-white text-slate-500 dark:text-slate-300'>
              ${Highcharts.dateFormat('%b %e, %Y', this.x)}
            </div>
            <div class="z-1 absolute rounded-full bg-blue-600 w-3 h-3" style="top: ${top}px; left: ${left}px"></div>
            `;
				},
				backgroundColor: undefined,
				borderWidth: 0,
				borderColor: '#ccc',
				shadow: false,
				borderRadius: 0,
				padding: 0,
				distance: 0,
				useHTML: true,
				shape: 'rect' as Highcharts.TooltipShapeValue,

				style: {
					// CSS properties for the text in the tooltip box
					color: '#333333',
					fontSize: '11px'
				}
			},
			plotOptions: {
				series: {
					animation: {
						duration: 0,
						easing: 'easeInOutSine'
					},
					events: {
						mouseOut: () => {
							onChartMouseOut();
						}
					},
					states: {
						hover: {
							enabled: false
						},
						inactive: {
							opacity: 1
						}
					},
					point: {
						events: {
							mouseOver: function () {
								onChartMouseMove(this.x);
							}
						}
					}
				}
			}
		});
	};
</script>

<!-- Display the selected date -->
<section class="mb-6">
	<h4>My Total Performance: <span class={color(performancePct)}>{formatPercent(performancePct)}</span></h4>
	<p>
		CAGR: {formatPercent(getCAGR(performancePct, $chartSelectedDate))}
	</p>

	<p>
		US Total Equity Benchmark: <span class={color(benchmarkPct)}>{formatPercent(benchmarkPct)}</span>
		<span class="text-sm">({formatPercent(Math.abs(performancePct / benchmarkPct - 1))} {performancePct > benchmarkPct ? 'higher' : 'lower'})</span>
	</p>
</section>

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

{#if benchmarkTable}
	<BenchmarkTable balances={displayBalances.length - benchmarkBalances.length >= 2 ? benchmarkBalances : displayBalances} />
{/if}
