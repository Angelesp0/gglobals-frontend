import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanydocumentsPage } from './companydocuments.page';

const routes: Routes = [
  {
    path: '',
    component: CompanydocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanydocumentsPageRoutingModule {}
