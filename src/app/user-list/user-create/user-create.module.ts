import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreateComponent } from './user-create.component';
import {UserCreateRoutingModule} from './user-create-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCreateRoutingModule
  ],
  declarations: [UserCreateComponent]
})
export class UserCreateModule {}
