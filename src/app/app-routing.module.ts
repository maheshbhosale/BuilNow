import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path:'company',
    loadChildren:()=>import('./company/company.module').then(mod=>mod.CompanyModule)
  },
  {
    path:'property',
    loadChildren:()=>import('./property/property.module').then(mod=>mod.PropertyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
