/**
 * Created by laixiangran on 2017/4/23.
 * homepage：http://www.laixiangran.cn
 */

import { ChartObject } from "highcharts";

export class EssenceChart {
    public chart: ChartObject; // highChart的图表对象
    public options: Object; // 图表配置属性

    constructor(opts: Object) {
        this.options = opts;
    }

    /**
     * 获取数据列
     * @returns {SeriesObject[]}
     */
    getSeries() {
        return this.chart.series;
    }

    /**
     * 设置数据列的值
     * @param data 数据列数据
     * @param index 指定数据列序号
     */
    setData(data: any[], index: number = 0) {
        this.chart.series[index].setData(data);
    }

    /**
     * 设置x轴分类
     * @param categories 分类数据
     * @param index 指定x轴序号
     */
    setXCategories(categories: any[], index: number = 0) {
        this.chart.xAxis[index].setCategories(categories);
    }

    /**
     * 设置数据列
     * @param series
     * @deprecated 使用 `setData` 代替。
     */
    setSeries(series: any) {
        this.options["series"] = series;
    }

    /**
     * 设置x轴分类
     * @param categories
     * @deprecated 使用 `setXCategories` 代替。
     */
    setXaxisCategories(categories: any) {
        !this.options["xAxis"] && (this.options["xAxis"] = {});
        this.options["xAxis"]["categories"] = categories;
    }
}
