import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from './../../providers/user.service';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  id: number;
  data: any;
  selectedFile: File;


  constructor(
    private http: HttpClient,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router) {
      this.data = new User();
     }

  ngOnInit() {
    const user  = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getUser(user[0]['id_user']).subscribe(response => {
      this.data  = response;
    });
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
  // this.http is the injected HttpClient
  const uploadData = new FormData();
  uploadData.append('file', this.selectedFile, this.selectedFile.name);
  this.http.post('http://192.168.137.1:3000/subir', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }


}
