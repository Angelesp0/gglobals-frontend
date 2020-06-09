import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { UserService } from './../../providers/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  data: User;


  constructor(
    public userService: UserService,
    public router: Router
  ) {
    this.data = new User();
  }

  ngOnInit() {


  }

  create(){
    this.data.role = 0;
    this.userService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['user-list']);
    });
  }

}
