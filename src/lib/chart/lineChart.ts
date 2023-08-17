import Highcharts from 'highcharts/highstock';
import type { SeriesLineOptions } from 'highcharts';
import { formatCurrency } from '$lib/utils/format';

type ChartProps = {
	data: SeriesLineOptions[];
	onMouseOver?: (x: number) => void;
	onMouseOut?: () => void;
	container: HTMLElement;
	showX?: boolean;
	showY?: boolean;
	color?: string;
	tooltip?: boolean;
};

export const drawChart = ({ container, data, onMouseOver, onMouseOut, showX = true, showY = true, color = '#ffcc33', tooltip = true }: ChartProps) => {
	// Create a Highcharts stock chart in the given container with the specified configuration

	Highcharts.stockChart(container, {
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
				width: 2,
				dashStyle: 'Dash' as Highcharts.DashStyleValue
			}
		},
		yAxis: {
			labels: {
				style: {
					color: '#aaa'
				},
				formatter: function () {
					// Format y-axis labels as dollar amounts with comma separators
					return '$' + this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				}
			}
		},
		tooltip: {
			positioner: function (labelWidth, labelHeight, point) {
				if (point.plotX < 50) {
					return { x: 0, y: 0 };
				}

				if (point.plotX > this.chart.chartWidth - 70) {
					return { x: this.chart.chartWidth - 120, y: 0 };
				}

				return { x: point.plotX - 50, y: 0 };
			},
			enabled: true,
			formatter: function () {
				// Check if the x value of the data point is valid
				if (this.x === undefined || typeof this.x !== 'number') {
					return 'Error: Invalid date';
				}

				// Calculate tooltip position
				const chartWidth = this.point.series.chart.plotWidth || 0;
				const dataPointX = this.point.plotX || 0;
				const dataPointY = this.point.plotY || 0;

				let left = 50;
				if (dataPointX < 50) left = dataPointX;
				if (dataPointX > chartWidth - 50) left = 100 - (chartWidth - dataPointX);

				const top = dataPointY - 13;

				return `
          <div class='z-10 opacity-80 absolute top-[5px] left-[10px] w-[100px] rounded-xl text-center px-3 py-2 text-xs dark:bg-slate-600 bg-slate-200 text-slate-500 dark:text-slate-300'>
            ${showX ? Highcharts.dateFormat('%b %e, %Y', this.x) : ''}
						${showY ? `<div>${formatCurrency(this.y)}</div>` : ''}
          </div>
					${tooltip ? `<div class='z-5 absolute w-[20px] h-[20px] rounded-full bg-slate-600' style='left: ${left}px; top: ${top}px; opacity: 0.5'></div>` : ''}
					${tooltip ? `<div class="z-5 absolute w-[12px] h-[12px] shadow-xl rounded-full ml-[4px] mt-[4px]" style="background-color: ${color}; left: ${left}px; top: ${top}px;" />` : ''}
        `;
			},
			backgroundColor: undefined,
			borderWidth: 0,
			borderColor: undefined,
			borderRadius: 0,
			padding: 0,
			distance: 0,
			useHTML: true
		},
		plotOptions: {
			series: {
				animation: {
					duration: 0,
					easing: 'easeInOutSine'
				},
				events: {
					// Trigger the onMouseOut function when the mouse leaves the chart area
					mouseOut: () => {
						if (onMouseOut) onMouseOut();
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
						// Trigger the onMouseOver function when the mouse hovers over a data point
						mouseOver: function () {
							if (onMouseOver) onMouseOver(this.x);
						}
					}
				}
			}
		}
	});
};
