/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter, DoCheck } from '@angular/core';
import { ENgxChartOptions } from './ENgxChartOptions';
import * as Highcharts from 'highcharts/highstock';

@Directive({
	selector: '[eNgxChart]',
	exportAs: 'eNgxChart'
})
export class ENgxChartDirective implements OnInit, OnDestroy, DoCheck {

	private el: HTMLElement;
	private oldSeries: any;
	private eNgxChartOptions: ENgxChartOptions;

	@Input()
	set chartOptions(data: any) {
		this.eNgxChartOptions = data;
	}
	@Input() type: string = 'chart';
	@Input() theme: Object;
	@Output() ready: EventEmitter<any> = new EventEmitter<any>(false);
	@Output() destroy: EventEmitter<any> = new EventEmitter<any>(false);

	constructor(el: ElementRef) {
		this.el = el.nativeElement;
	}

	ngOnInit() {
		this.chartInit();
	}

	ngOnDestroy() {
		this.chartDestroy();
	}

	ngDoCheck() {
		if (this.oldSeries && this.eNgxChartOptions.getSeries() !== this.oldSeries) {
			this.oldSeries = this.eNgxChartOptions.getSeries();
			this.chartDestroy();
			this.chartInit();
		}
	}

	private chartInit() {
		Highcharts.setOptions(this.theme);
		if (this.type === 'chart') {
			this.eNgxChartOptions.chart = Highcharts.chart(this.el, this.eNgxChartOptions.options);
		} else if (this.type === 'stockChart') {
			this.eNgxChartOptions.chart = Highcharts['stockChart'](this.el, this.eNgxChartOptions.options);
		}
		this.ready.emit(this);
	}

	chartDestroy() {
		if (this.eNgxChartOptions.chart) {
			this.eNgxChartOptions.chart.destroy();
		}
		this.destroy.emit(true);
	}
}
