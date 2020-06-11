import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../..//providers/user.service';
import { User } from './../../../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: User;


  constructor(private  authService: UserService, private  router: Router) {
    this.data = new User();
   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.data.email, this.data.password).subscribe((res) => {
      this.router.navigateByUrl('/user-list');
    });
  }
}
