<script lang="ts">
	import { onMount } from 'svelte';
	import Highcharts from 'highcharts/highstock';
	import { formatCurrency } from '$lib/utils/format';

	export let prices: {
		date: string;
		price: number;
	}[];

	// Initialize container and chart variables
	let container: HTMLElement;
	let chart: Highcharts.Chart | null = null;

	const seriesData = [
		{
			name: 'Your Performance',
			data: prices.map((p) => [new Date(p.date).getTime(), p.price] as [number, number]),
			// data: displayBalances.map((b) => [new Date(b.date).getTime(), b.end_balance] as [number, number]),
			lineWidth: 2,
			dashStyle: 'Solid' as Highcharts.DashStyleValue,
			color: '#ffcc33',
			type: 'line' as 'line'
		}
	];

	onMount(() => {
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
			series: seriesData,
			credits: {
				enabled: false
			},
			xAxis: {
				events: {},
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
              ${Highcharts.dateFormat('%b %e, %Y', this.x)}<br>
              ${formatCurrency(this.y, 2)}
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
						mouseOver: () => {}
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
								// // set series[0] and series[1] to have the same x
								// const x = this.x;
								// const y = this.y;
								// if (chart && chart.series && chart.series[1]) {
								// 	chart.series[1].setData([[x, y]], true);
								// }
							}
						}
					}
				}
			}
		});
	});
</script>

<div>
	<h4>Chart</h4>
	<div class="h-[440px]" bind:this={container} />
</div>
