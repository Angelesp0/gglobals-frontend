import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../_services/company/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  companies: any;

  constructor(
    public companyService: CompanyService
    ) { }


  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllStudents();
  }

  getAllStudents() {
    this.companyService.getCompanies()
    .subscribe(
      (data) => { // Success
        this.companies = data;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  getCompany(id){
    this.companyService.getCompany(id)
    .subscribe(
      (data) => {
        this.companies = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(Response => {
      this.getAllStudents();
    });
  }

}
