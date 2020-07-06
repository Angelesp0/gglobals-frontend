import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AServicesPageRoutingModule } from './a-services-routing.module';

import { AServicesPage } from './a-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AServicesPageRoutingModule
  ],
  declarations: [AServicesPage]
})
export class AServicesPageModule {}
