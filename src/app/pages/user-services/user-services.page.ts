import { Component, OnInit } from '@angular/core';
import { UserService } from './../../providers/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.page.html',
  styleUrls: ['./user-services.page.scss'],
})
export class UserServicesPage implements OnInit {
  services: any;
  id: number;
  true: boolean = true;
  start: Date;
  end: Date;

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllServices();
  }

  getAllServices() {
    this.id = this.activatedRoute.snapshot.params["id_user"];
    this.userService.getServicesByUserId(this.id)
    .subscribe(
      (data) => { // Success
        this.services = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
