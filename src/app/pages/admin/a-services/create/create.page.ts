import { Component, OnInit } from '@angular/core';
import { Service } from './../../../../models/service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../../../../_services/admin/admin.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  data: Service;
  selectedFile: File;


  constructor(
    public adminService: AdminService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.data = new Service();
  }

  ngOnInit() {


  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.adminService.createItem(this.data, this.selectedFile).subscribe((response) => {
      this.router.navigate(['services']);
    });
/*
    this.http.post('http://192.168.137.1:3000/files',  uploadData, {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
        });*/
    }
}

