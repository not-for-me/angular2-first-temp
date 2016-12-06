import { Component, OnInit } from '@angular/core';
import { CheckListStatisticsService } from '../../check-list-statistics.service';

@Component({
  selector: 'cc-result-graph',
  template:`
  <h4>체크항목 통계 리포트</h4>
  <div class="chart" *ngIf="graphToggle">
    <div class="grid">
      <span [style.height]="checkedRatio" [title]="checkedRatio"></span>
    </div>
  </div>
  `, 
  styleUrls: ['./result-graph.component.css'],
})
export class ResultGraphComponent implements OnInit {
  checkedRatio: string = '0%';
  graphToggle = true;

  constructor(public checkListStatisticsService: CheckListStatisticsService) {}

  ngOnInit() {
      this.checkListStatisticsService.changedCntState.subscribe(() => this.onPrintGraph());
  }

  onPrintGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListStatisticsService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
}
