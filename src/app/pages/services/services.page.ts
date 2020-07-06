import { Component, OnInit } from '@angular/core';
import { UserService } from './../../providers/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  id: number;
  services: any;
  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["id_user"];
    this.userService.getServices().subscribe(response => {
      this.services  = response;
    });
  }

}
