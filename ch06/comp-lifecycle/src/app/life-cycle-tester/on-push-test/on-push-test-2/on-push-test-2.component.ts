import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'cl-on-push-test-2',
  templateUrl: './on-push-test-2.component.html',
  styleUrls: ['./on-push-test-2.component.css']
})
// export class OnPushTest2Component implements OnInit {
export class OnPushTest2Component implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
   console.log('[ngDoCheck]');
  }
}
