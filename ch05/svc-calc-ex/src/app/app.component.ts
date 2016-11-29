import { Component, trigger, state, stype, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('titleState', [
      state('stable', style({ 
        color: '#ef1',
        transform: 'scale(1)' 
      })),
      state('clicked', style({
        color: '#054',
        transform: 'scale(1.2)'
      })),
      transition('stable => unstable', animate('100ms ease-in')),
      transition('unstable => stable', animate('100ms ease-out))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
}
