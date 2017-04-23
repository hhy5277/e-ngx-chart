import {Component} from '@angular/core';
import {EssenceChart} from "../../src/EssenceChart";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor () {}

	chart = new EssenceChart({
		chart: {
			type: "column"
		},
		title: {
			text: ""
		},
		xAxis: {
			categories: ["西冉村", "宝山", "苗寨", "四季青", "北坞村", "金河闸", "田村", "香山"],
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
				align: "center"
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
}
