import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appTitle = '상품관리 시스템';

  constructor() { }

  ngOnInit() {
  }

}
