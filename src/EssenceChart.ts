/**
 * Created by laixiangran on 2017/4/23.
 * homepage：http://www.laixiangran.cn
 */

export class EssenceChart {
	public ref: any;

	constructor (public options: Object) {
	}

	getSeries () {
		return this.options["series"];
	}

	setSeries (series: any) {
		this.options["series"] = series;
	}

	setXaxisCategories (categories: any) {
		!this.options["xAxis"] && (this.options["xAxis"] = {});
		this.options["xAxis"]["categories"] = categories;
	}
}
