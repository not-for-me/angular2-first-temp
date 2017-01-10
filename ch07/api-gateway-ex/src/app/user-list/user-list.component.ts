import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { User, UserDetailService, UserDetailComponent } from './user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userSummaries: any[];
  selectedUserNo: number = 0;

  constructor(
    private userListService: UserListService,
    private userDetailService: UserDetailService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.fetchAllUserSummary();
  }

  fetchAllUserSummary() {
    this.userListService.findAllUserSummary().subscribe(res => this.userSummaries = res);
  }


  selectUser(no: number) {
    this.selectedUserNo = no;
  }

  getUserDetailDialog(no: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = false;
    dialogRef.componentInstance.userNo = no;
    dialogRef.afterClosed().subscribe(result => {
      this.fetchAllUserSummary();
    });
  }

  removeUser() {
    console.log(this.selectedUserNo);
  }

  addUser() {
    const dialogRef = this.dialog.open(UserDetailComponent, { width: '20%' });
    dialogRef.componentInstance.isAddMode = true;
    dialogRef.componentInstance.userNo = 0;
    dialogRef.afterClosed().subscribe(result => {
      this.fetchAllUserSummary();
    });
  }
}
