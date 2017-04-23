/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import {Directive, ElementRef, Input, OnInit, OnDestroy, DoCheck, Output, EventEmitter} from "@angular/core";
import * as Highcharts from "highcharts";
import {EssenceChart} from "./EssenceChart";

@Directive({
	selector: "[essence-ng2-chart]"
})
export class EssenceNg2ChartDirective implements OnInit, OnDestroy, DoCheck {
	private el: HTMLElement;
	private oldSeries: any;

	constructor (el: ElementRef) {
		this.el = el.nativeElement;
	}

	@Input("chart") essenceChart: EssenceChart;
	@Input("chart-theme") theme: Object;
	@Output() ready: EventEmitter<any> = new EventEmitter<any>(false);

	ngOnInit () {
		this.init();
		this.ready.emit(this);
	}

	ngOnDestroy () {
		this.destroy();
	}

	ngDoCheck () {
		if (this.essenceChart.getSeries() !== this.oldSeries) {
			this.oldSeries = this.essenceChart.getSeries();
			this.destroy();
			this.init();
		}
	}

	private init () {
		Highcharts.setOptions(this.theme);
		this.essenceChart.ref = new Highcharts.Chart(this.el, this.essenceChart.options);
	}

	destroy () {
		if (this.essenceChart.ref) {
			this.essenceChart.ref.destroy();
		}
	}
}
