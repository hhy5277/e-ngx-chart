/**
 * Created by laixiangran on 2017/4/23.
 * homepage：http://www.laixiangran.cn
 */

import {AxisObject, ChartObject} from 'highcharts';

export class EssenceChart {
	public chart: ChartObject; // highChart的图表对象
	public options: any; // 图表配置属性

	constructor(opts: any) {
		this.options = opts;
	}

	/**
	 * 获取数据列
	 * @returns {SeriesObject[]}
	 */
	getSeries() {
		return this.options['series'];
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
	 */
	setSeries(series: any) {
		this.options['series'] = series;
	}

	/**
	 * 设置x轴分类
	 * @param categories
	 */
	setXaxisCategories(categories: any) {
		if (!this.options['xAxis']) {
			this.options['xAxis'] = {}
		}
		this.options['xAxis']['categories'] = categories;
	}
}
