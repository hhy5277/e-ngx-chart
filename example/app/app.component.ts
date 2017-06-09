import { Component } from '@angular/core';
import { EssenceChart } from "../../src/EssenceChart";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {}

    chart = new EssenceChart({
        chart: {
            type: "line"
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

    chart1 = new EssenceChart({
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

    chart2 = new EssenceChart({
        chart: {
            type: "pie"
        },
        title: {
            text: ""
        },
        series: [{
            data: [
                ["西冉村",100],
                ["宝山", 120],
                ["苗寨", 130],
                ["四季青", 140],
                ["北坞村", 250],
                ["金河闸", 160],
                ["田村", 230],
                ["香山", 180]
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

    setData() {
        let data: number[] = [100, 120, 130, 140, 250, 160, 230, 180];
        data.forEach((d: number, index: number) => {
            data[index] = d + Math.random() * 100;
        });
        this.chart.setData(data);
        this.chart1.setData(data);
        this.chart2.setData(data);
    }

    setXCategories() {
        let categories: string[] = ["金河闸", "田村", "香山", "西冉村", "宝山", "苗寨", "四季青", "北坞村"];
        this.chart.setXCategories(categories);
        this.chart1.setXCategories(categories);
    }
}
