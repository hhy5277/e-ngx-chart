/**
 * Created by laixiangran on 2016/8/15.
 * homepage：http://www.laixiangran.cn.
 */

import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter, DoCheck } from "@angular/core";
import { setOptions, chart } from "highcharts";
import { EssenceChart } from "./EssenceChart";

@Directive({
    selector: "[essence-ng2-chart]"
})
export class EssenceNg2ChartDirective implements OnInit, OnDestroy, DoCheck {
    private el: HTMLElement;
    private oldSeries: any;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input("chart") essenceChart: EssenceChart;
    @Input("chart-theme") theme: Object;
    @Output() ready: EventEmitter<any> = new EventEmitter<any>(false);
    @Output() destroy: EventEmitter<any> = new EventEmitter<any>(false);

    ngOnInit() {
        this.chartInit();
    }

    ngOnDestroy() {
        this.chartDestroy();
    }

    ngDoCheck () {
        if (this.essenceChart.getSeries() !== this.oldSeries) {
            this.oldSeries = this.essenceChart.getSeries();
            this.chartDestroy();
            this.chartInit();
        }
    }

    private chartInit() {
        setOptions(this.theme);
        this.essenceChart.chart = chart(this.el, this.essenceChart.options);
        this.ready.emit(this);
    }

    chartDestroy() {
        if (this.essenceChart.chart) {
            this.essenceChart.chart.destroy();
        }
        this.destroy.emit(true);
    }
}
