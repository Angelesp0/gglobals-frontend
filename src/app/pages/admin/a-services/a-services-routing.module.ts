import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AServicesPage } from './a-services.page';

const routes: Routes = [
  {
    path: '',
    component: AServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AServicesPageRoutingModule {}
