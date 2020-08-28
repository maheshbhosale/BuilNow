import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [YourOrdersComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTabsModule
  ]
})
export class OrderModule { }
