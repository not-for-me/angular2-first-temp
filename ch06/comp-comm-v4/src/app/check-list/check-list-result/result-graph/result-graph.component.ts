import { Component } from '@angular/core';
import { CheckListStatisticsService } from '../../check-list-statistics.service';

@Component({
  selector: 'cc-result-graph',
  template:`
  <h4>체크항목 통계 리포트</h4>
  <button type="button" (click)="onPrintGraph()">그래프 출력</button>
  <div class="chart" *ngIf="graphToggle">
    <div class="grid">
      <span [style.height]="checkedRatio" [title]="checkedRatio"></span>
    </div>
  </div>
  `, 
  styleUrls: ['./result-graph.component.css'],
})
export class ResultGraphComponent {
  checkedRatio: string = '0%';
  graphToggle = true;

  constructor(public checkListStatisticsService: CheckListStatisticsService) { }

  onPrintGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListStatisticsService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
}
