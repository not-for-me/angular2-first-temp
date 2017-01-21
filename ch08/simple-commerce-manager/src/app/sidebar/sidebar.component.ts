import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  curPage: string = 'default';
  @Output() changedPage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedNavItem($event: MouseEvent, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.curPage = item;
    this.changedPage.emit(item);
  }
}
