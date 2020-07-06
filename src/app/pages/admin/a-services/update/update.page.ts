import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../../_services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from './../../../../models/service';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: number;
  data: any;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.data = new Service();
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_service"];
    // get item details using id
    this.adminService.getService(this.id).subscribe(response => {
      this.data  = response[0];
    });
  }

  update() {
    // Update item by taking id and updated data object
    this.adminService.updateService(this.id, this.data).subscribe(response => {
      this.router.navigate(['user-list']);
    });
  }
}
