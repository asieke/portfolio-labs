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

	// Received as a prop from the parent component
	export let balances: Balance[];

	console.log('Balances....', balances);

	// References to the div container for the chart and the chart object itself
	let container: HTMLElement;
	let chart;

	// Function to format the input data for use in the Highcharts chart
	function getData() {
		// Define labels for the benchmarks
		const labels = ['Vanguard 2050 Fund', 'Cash', 'US Equity Total Market'];

		// Initialize data with user performance
		const data = [
			{
				name: 'Your Performance',
				data: balances.map((b) => [new Date(b.date).getTime(), b.end_balance]),
				lineWidth: 5
			}
		];

		// Add each benchmark to the data array
		labels.forEach((label) => {
			data.push({
				name: label,
				data: balances.map((b) => [new Date(b.date).getTime(), b.end_benchmarks[label]]),
				lineWidth: 1
			});
		});

		return data;
	}

	// When the component mounts, create the Highcharts chart
	onMount(async () => {
		const data = getData();

		chart = Highcharts.stockChart(container, {
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
			yAxis: {
				labels: {
					//add commas and dollar signs

					formatter: function () {
						return '$' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					}
				}
			}
		});
	});
</script>

<!-- Div container for the Highcharts stock chart -->
<div class="h-[440px]" bind:this={container} />
