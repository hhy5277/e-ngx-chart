import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EssenceNg2ChartModule} from "../../src/essence-ng2-chart.module";

@NgModule({
    imports: [
        BrowserModule,
		EssenceNg2ChartModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
