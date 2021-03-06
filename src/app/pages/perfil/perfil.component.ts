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
  imgs: any;
  hola = 'hola';


  constructor(
    private http: HttpClient,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router) {
      this.data = new User();
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_user"];
    const user  = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getUser(this.id).subscribe(response => {
      this.data  = response;
    });
    this.userService.getImg(this.id).subscribe(res => {
      console.log(res);
      const img = JSON.stringify(res[0].nombre);
      this.imgs = img.replace(/['"]+/g, '');
    });
  }




  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
  const userid = this.activatedRoute.snapshot.params["id_user"];

  // this.http is the injected HttpClient
  const uploadData = new FormData();
  uploadData.append('file', this.selectedFile, this.selectedFile.name);
  uploadData.append('users_id_user', userid);
  this.http.post('http://192.168.137.1:3000/subirimagen',  uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
      });
  }


}
