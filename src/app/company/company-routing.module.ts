import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
      path:'add-new-user',
      component:AddEditUserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
