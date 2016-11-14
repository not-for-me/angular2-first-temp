import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private appTitle: string = "다국어 인사말 서비스";
  private langCode: string;

  changedLangCode(e) {
    console.log(e);
    this.langCode = e;
  }
}

