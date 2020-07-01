import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanydocumentsPageRoutingModule } from './companydocuments-routing.module';

import { CompanydocumentsPage } from './companydocuments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanydocumentsPageRoutingModule
  ],
  declarations: [CompanydocumentsPage]
})
export class CompanydocumentsPageModule {}
