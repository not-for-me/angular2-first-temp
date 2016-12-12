import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListStatisticsService } from './check-list/check-list-statistics.service';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import { ResultGraphComponent } from './check-list/result-graph/result-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent,
    ResultGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CheckListStatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
