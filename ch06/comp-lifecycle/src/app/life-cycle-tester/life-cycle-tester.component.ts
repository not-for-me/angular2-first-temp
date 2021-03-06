import { ChangeDetectionStrategy, Component, Input, SimpleChanges, OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'cl-life-cycle-tester',
  templateUrl: './life-cycle-tester.component.html',
  styleUrls: ['./life-cycle-tester.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleTesterComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
  AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input() counter: number;
  @Input() user: any;

  constructor() {
    console.log("[constructor]");
  }

  ngOnInit() {
    console.log('[OnInit]');
  }

  ngOnDestroy() {
    console.log('[OnDestory]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.dir(changes);
  }

  ngDoCheck() {
    console.log('[DoCheck]');
  }

  ngAfterViewInit() {
    console.log('[AfterViewInit]');
  }

  ngAfterContentInit() {
    console.log('[AfterContentInit]');
  }

  ngAfterViewChecked() {
    console.log('[AfterViewChecked]');
  }

  ngAfterContentChecked() {
    console.log('[AfterContentChecked]');
  }
}
