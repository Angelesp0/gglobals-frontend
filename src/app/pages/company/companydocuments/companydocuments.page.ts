import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../providers/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companydocuments',
  templateUrl: './companydocuments.page.html',
  styleUrls: ['./companydocuments.page.scss'],
})
export class CompanydocumentsPage implements OnInit {
  id: number;
  documents: any;

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id_company"];
    this.userService.getDocumentsByIdCompany(this.id).subscribe(response => {
      this.documents  = response;
    });
  }

}
