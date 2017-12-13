/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter, DoCheck } from '@angular/core';
import { setOptions, chart } from 'highcharts';
import { ENgxChartOptions } from './ENgxChartOptions';

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
		if (this.eNgxChartOptions.getSeries() !== this.oldSeries) {
			this.oldSeries = this.eNgxChartOptions.getSeries();
			this.chartDestroy();
			this.chartInit();
		}
	}

	private chartInit() {
		setOptions(this.theme);
		this.eNgxChartOptions.chart = chart(this.el, this.eNgxChartOptions.options);
		this.ready.emit(this);
	}

	chartDestroy() {
		if (this.eNgxChartOptions.chart) {
			this.eNgxChartOptions.chart.destroy();
		}
		this.destroy.emit(true);
	}
}
