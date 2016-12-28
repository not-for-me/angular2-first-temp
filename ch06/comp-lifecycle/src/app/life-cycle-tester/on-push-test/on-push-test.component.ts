import { ChangeDetectionStrategy, Component, Input, SimpleChanges, OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'cl-on-push-test',
  templateUrl: './on-push-test.component.html',
  styleUrls: ['./on-push-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// export class OnPushTestComponent implements OnInit {
// export class OnPushTestComponent implements OnInit, DoCheck {
export class OnPushTestComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
  AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {

  constructor() { }

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
