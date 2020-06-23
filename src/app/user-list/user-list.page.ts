import { Component, OnInit } from '@angular/core';

import { UserService } from './../providers/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage {
  users: any;

  constructor(
    public userService: UserService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id) {
    this.userService.deleteItem(id).subscribe(Response => {
      this.getAllStudents();
    });
  }

}
