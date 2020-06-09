import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../providers/user.service';
import { User } from '../../models/user';




@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {

  id: number;
  data: any;

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.data = new User();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_user"];
    // get item details using id
    this.userService.getUser(this.id).subscribe(response => {
      this.data  = response;
    });
  }

  update() {
    // Update item by taking id and updated data object
    this.userService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['user-list']);
    });
  }

}
