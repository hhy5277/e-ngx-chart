import { Component, OnInit } from '@angular/core';
import { ENgxChartOptions } from '../../src/ENgxChartOptions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	chart = new ENgxChartOptions({
		chart: {
			type: 'line'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: ['西冉村', '宝山', '苗寨', '四季青', '北坞村', '金河闸', '田村', '香山'],
			title: {
				text: null
			},
			tickLength: 0
		},
		yAxis: {
			min: 0,
			title: {
				text: null
			},
			labels: {
				align: 'center'
			}
		},
		plotOptions: {
			series: {
				marker: {
					enabled: false,
					states: {
						hover: {
							enabled: false
						}
					}
				}
			}
		},
		series: [{
			data: [100, 120, 130, 140, 250, 160, 230, 180]
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		}
	});

	chart1 = new ENgxChartOptions({
		chart: {
			type: 'column'
		},
		title: {
			text: ''
		},
		xAxis: {
			categories: ['西冉村', '宝山', '苗寨', '四季青', '北坞村', '金河闸', '田村', '香山'],
			title: {
				text: null
			},
			tickLength: 0
		},
		yAxis: {
			min: 0,
			title: {
				text: '单位'
			},
			labels: {
				align: 'center'
			}
		},
		series: [{
			data: [100, 120, 130, 140, 250, 160, 230, 180]
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			valueSuffix: ' USD',
			shared: true
		},
	});

	chart2 = new ENgxChartOptions({
		chart: {
			type: 'pie'
		},
		title: {
			text: ''
		},
		series: [{
			data: [
				['西冉村', 100],
				['宝山', 120],
				['苗寨', 130],
				['四季青', 140],
				['北坞村', 250],
				['金河闸', 160],
				['田村', 230],
				['香山', 180]
			]
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		tooltip: {
			enabled: false
		}
	});

	constructor() {
	}

	chartReady($event: any) {
		setInterval(() => {
			const data: number[] = [100, 120, 130, 140, 250, 160, 230, 180];
			data.forEach((d: number, index: number) => {
				data[index] = d + Math.random() * 100;
			});
			this.chart.setData(data);
		}, 3000);
	}

	chart1Ready($event: any) {
		setInterval(() => {
			const data: number[] = [100, 120, 130, 140, 250, 160, 230, 180];
			data.forEach((d: number, index: number) => {
				data[index] = d + Math.random() * 150;
			});
			const i = parseInt(Math.random() * 8 + '', 10);
			this.chart1.chart.series[0].setData(data);
		}, 3000);
		this.chart1.chart.yAxis[0].setTitle({
			text: '新 Y 轴标题',
			x: -20,
			rotation: 90
		})
		this.chart1.options.tooltip.valueSuffix = ' ss';
	}

	chart2Ready($event: any) {
		setInterval(() => {
			const data: number[] = [100, 120, 130, 140, 250, 160, 230, 180];
			data.forEach((d: number, index: number) => {
				data[index] = d + Math.random() * 200;
			});
			this.chart2.setData(data);
		}, 3000);
	}
}
