<script lang="ts">
	/***********************
	 * Component: Chart
	 * Summary: This Svelte component is responsible for rendering a Highcharts stock chart of the user's portfolio balances
	 * over time, as well as the performance of several benchmarks. It receives a list of balance data as a prop and formats
	 * this data to be used in the Highcharts stock chart. The chart is displayed within a div container in the component's markup.
	 ***********************/

	import { onMount } from 'svelte';
	import Highcharts from 'highcharts/highstock';
	import type { Balance } from '$types/balances';
	import { chartDates } from '$lib/utils/dates';
	import { balanceDisplayData } from '$models/balances';
	import { hexToRGBA } from '$lib/utils/colors';

	// Received as a prop from the parent component
	export let balances: Balance[];

	const benchmarks = balanceDisplayData.map((b) => b.name);
	let selectedDate = chartDates[0].value;

	$: selectedBenchmarks = benchmarks.map((b) => false);

	$: displayBalances = [...balances].filter((b) => b.date > selectedDate);
	$: if (container && displayBalances) {
		drawChart();
	}

	// References to the div container for the chart and the chart object itself
	let container: HTMLElement;
	let chart: Highcharts.Chart | null = null;

	const updateDate = (date: string) => {
		selectedDate = date;
		displayBalances = balances.filter((b) => b.date > selectedDate);
		drawChart();
	};

	const updateBenchmarks = (index: number) => {
		selectedBenchmarks[index] = !selectedBenchmarks[index];
		drawChart();
	};

	// Function to format the input data for use in the Highcharts chart
	function getData() {
		// Define labels for the benchmarks

		// Initialize data with user performance
		const data = [
			{
				name: 'Your Performance',
				data: displayBalances.map((b) => [new Date(b.date).getTime(), b.end_balance]),
				lineWidth: 4,
				dashStyle: 'Solid' as Highcharts.DashStyleValue,
				color: balanceDisplayData[0].color
			}
		];

		// Add each benchmark to the data array
		balanceDisplayData.forEach((label, i) => {
			if (!selectedBenchmarks[i]) return;
			const baseline = displayBalances[0].end_balance / displayBalances[0].end_benchmarks[label.name];
			data.push({
				name: label.name,
				data: displayBalances.map((b) => [new Date(b.date).getTime(), baseline * b.end_benchmarks[label.name]]),
				lineWidth: 1,
				//set the style to dashed
				dashStyle: 'Dash' as Highcharts.DashStyleValue,
				color: label.color
			});
		});

		return data;
	}

	const drawChart = () => {
		const data = getData();
		chart = Highcharts.stockChart(container, {
			chart: {
				backgroundColor: undefined,
				plotBorderWidth: undefined
			},
			rangeSelector: {
				enabled: false
			},
			title: {},
			series: data.map((item) => ({ ...item, type: 'line' })),
			tooltip: {
				valueDecimals: 2, // Set the number of decimal places in the tooltip
				valuePrefix: '$' // Add a dollar sign in front of the values in the tooltip
			},
			credits: {
				enabled: false
			},
			xAxis: {
				labels: {
					style: {
						color: '#aaa', // Change the color of the x-axis labels
						fontSize: '12px' // Change the font size of the x-axis labels
					}
				},
				lineColor: '#707073', // Change the color of the line
				tickColor: '#707073' // Change the color of the ticks
			},
			yAxis: {
				labels: {
					style: {
						color: '#aaa'
					},
					//add commas and dollar signs

					formatter: function () {
						return '$' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			}
		});
	};

	// When the component mounts, create the Highcharts chart
	onMount(async () => {
		drawChart();
	});
</script>

<h2>{selectedDate}</h2>
<div class="mt-3 flex flex-row space-x-2">
	{#each chartDates as date}
		{#if date.value === selectedDate}
			<button class="selected">{date.label}</button>
		{:else}
			<button on:click={() => updateDate(date.value)}>{date.label}</button>
		{/if}
	{/each}
</div>

<!-- Div container for the Highcharts stock chart -->
<div class="h-[440px]" bind:this={container} />

<!-- Create a row of buttons for each of the dates in chartDate -->
<div class="flex flex-row space-x-2">
	{#each balanceDisplayData as label, i}
		{#if label.name !== 'Your Performance'}
			{#if selectedBenchmarks[i]}
				<button style="background-color: {hexToRGBA(label.color, 1)}" on:click={() => updateBenchmarks(i)}>{label.name}</button>
			{:else}
				<button style="background-color: {hexToRGBA(label.color, 0.1)}" on:click={() => updateBenchmarks(i)}>{label.name}</button>
			{/if}
		{/if}
	{/each}
</div>

<style lang="postcss">
	button {
		@apply rounded-lg bg-slate-300 px-3 py-1 text-xs font-medium  dark:bg-slate-600 dark:text-white;
	}
	button.selected {
		@apply bg-primary-500 text-white dark:bg-primary-700;
	}
</style>
