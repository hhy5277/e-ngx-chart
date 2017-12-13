# e-ngx-chart

基于Angular的图表组件。

依赖的第三方插件：[highcharts](https://www.hcharts.cn/demo/highcharts)

## Usage

1. Install

	```shell
	npm install --save e-ngx-chart
	```

2. Add the ENgxChartModule

	```typescript
	import { ENgxChartModule } from "e-ngx-chart";
	@NgModule({
	    imports: [
	        ENgxChartModule
	    ]
	})
	```

3. template

	```html
	<div class="chart-main" eNgxChart [chartOptions]="chartOptions"></div>
	```

4. component

	```typescript
	import { ENgxChartOptions } from "e-ngx-chart";
	
	chartOptions = new ENgxChartOptions({
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
	```

## API

### exportAs

- `eNgxChart` - 导出的指令变量，可在模板获取指令类并调用（`#eNgxChart="eNgxChart"`）。

### Inputs

- `chartOptions`（`ENgxChartOptions`） - new ENgxChartOptions(options)时，options与[Highcharts的配置属性](https://api.hcharts.cn/highcharts)一致

### Outputs

- `ready` - 初始化完成的事件，$event为当前ENgxChartDirective实例

### Instance Method

#### ENgxChartDirective

- `chartDestroy()` - 销毁图表控件

#### ENgxChartOptions

- `setData(data: any[], index: number = 0)` - 设置数据列的值。其中index为数据列序号。

- `setXCategories(categories: any[], index: number = 0)` - 设置x轴分类。其中index为x轴序号。

- `setSeries(series: any)` - 设置数据列。

- `setXaxisCategories(categories: any)` - 设置x轴分类。

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
