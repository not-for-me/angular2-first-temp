import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `<h1>{{greeting}}</h1>`
})
export class AppComponent {
    greeting: string = 'Hello, Angular2!';
    constructor() { }
}