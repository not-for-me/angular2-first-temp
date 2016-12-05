import { Component, Input, SimpleChanges, OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'cl-life-cycle-tester',
  templateUrl: './life-cycle-tester.component.html',
  styleUrls: ['./life-cycle-tester.component.css']
})
export class LifeCycleTesterComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
  AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input() testData: boolean;

  constructor() { }

  ngOnInit() {
    console.log('[OnInit]');
  }

  ngOnDestroy() {
    console.log('[OnDestory]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
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
