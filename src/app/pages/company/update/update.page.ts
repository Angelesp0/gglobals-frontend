import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../../../_services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from './../../../models/company';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: number;
  data: any;
  selectedFile: File;

  constructor(
    private http: HttpClient,
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
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    const userid = this.activatedRoute.snapshot.params["id_company"];
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    uploadData.append('company_id_company', userid);
    this.http.post('http://192.168.137.1:3000/files',  uploadData, {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
        });
    }

}
