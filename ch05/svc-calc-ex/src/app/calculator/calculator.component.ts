import { Component } from '@angular/core';

import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'calc-ex',
  template: `<span>1 + 2 = {{result}}</span><br/>
    <button type="button" (click)="add(1, 2)">add</button><br/>
    <span>10 + 20 = {{anotherResult}}</span><br/>
    <button type="button" (click)="addAnother(10, 20)">addAnother</button><br/>`
})
export class CalculatorComponent {
  private result: number;
  private anotherResult: number;
  private calculatorService: CalculatorService;

  constructor() {
    this.calculatorService = new CalculatorService();
  }

add(a, b) {
  // console.log(`Param: ${a}, ${b}`);
  // this.result = a + b;
  this.result = this.calculatorService.add(a, b);
  // console.log(`Result: ${this.result}`);
}

addAnother(a, b) {
  // console.log(`Param: ${a}, ${b}`);
  // this.anotherResult = a + b
  this.anotherResult = this.calculatorService.add(a, b);
  // console.log(`Result: ${this.anotherResult}`);
}
}
