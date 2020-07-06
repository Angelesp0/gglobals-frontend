import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../_services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a-services',
  templateUrl: './a-services.page.html',
  styleUrls: ['./a-services.page.scss'],
})
export class AServicesPage implements OnInit {
  id: number;
  services: any;
  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_service"];
    this.adminService.getServices().subscribe(response => this.services  = response);
  }

  deleteService(id){
    this.adminService.deleteService(id).subscribe(response => console.log('elemento eliminado'));
  }
}
