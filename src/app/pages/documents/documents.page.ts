import { Component, OnInit } from '@angular/core';
import { UserService } from './../../providers/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {
  id: number;
  documents: any;

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }


  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["id_user"];
    this.userService.getdocuments(this.id).subscribe(response => {
      this.documents  = response;
    });
  }

}
