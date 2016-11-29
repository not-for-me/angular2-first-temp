import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html'
})
export class AppComponent {
    counter: number;

    constructor() {
        this.counter = 0;
    }

    getColor() {
        if (this.counter > 0)  return 'green';
        else if (this.counter < 0) return 'red';
        else return 'grey'
    }

    inc() { this.counter++; }

    dec() { this.counter--; }
}
