import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyRoutingModule} from './company-routing.module';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class CompanyModule { }
