import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContentComponent,
    UserComponent,
    StatisticsComponent,
    ReadingComponent,
    TableComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
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
