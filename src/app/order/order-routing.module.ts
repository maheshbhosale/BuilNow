import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourOrdersComponent } from './your-orders/your-orders.component';


const routes: Routes = [
  {
    path: 'yourorder',
    component: YourOrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
