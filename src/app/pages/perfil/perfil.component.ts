import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from './../../providers/user.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  id: number;
  data: any;

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router) {
      this.data = new User();
     }

  ngOnInit() {
    const user  = JSON.parse(localStorage.getItem('currentUser'));
    this.id = 6;
    this.userService.getUser(user[0]['id_user']).subscribe(response => {
      this.data  = response;
    });
}
}
