import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENgxChartModule } from '../../src/e-ngx-chart.module';

@NgModule({
	imports: [
		BrowserModule,
		ENgxChartModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
