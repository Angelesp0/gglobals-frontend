import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpdateComponent } from './user-update.component';
import {UserUpdatePageRoutingModule} from './user-update-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUpdatePageRoutingModule
  ],
  declarations: [UserUpdateComponent]
})
export class UserUpdateModule {}
