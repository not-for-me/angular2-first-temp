import { Component } from '@angular/core';

@Component({
  selector: 'cl-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <button (click)="toggle()">Toggle</button>
  <cl-life-cycle-tester [testData]="toggleData"></cl-life-cycle-tester>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '생명주기 테스트!';
  toggleData: boolean = false;

  toggle() {
    this.toggleData = !this.toggleData;
  }
}
