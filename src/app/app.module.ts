import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserComponent } from './components/user/user.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ReadingComponent } from './components/reading/reading.component';
import { TableComponent } from './components/table/table.component';
import { DateComponent } from './components/date/date.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    UserComponent,
    StatisticsComponent,
    ReadingComponent,
    TableComponent,
    DateComponent,
    SideNavComponent,
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      "radius": 30,
      "space": -10,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#09c",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true}),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
