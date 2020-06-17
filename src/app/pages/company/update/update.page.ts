import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../../_services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from './../../../models/company';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: number;
  data: any;

  constructor(
    public companyService: CompanyService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.data = new Company();
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_company"];
    // get item details using id
    this.companyService.getCompany(this.id).subscribe(response => {
      this.data  = response;
    });
  }

  updateCompany(){
    this.companyService.updateCompany(this.id, this.data).subscribe(response => {
      this.router.navigate(['company']);
    });
  }

}
