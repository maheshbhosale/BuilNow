import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { PaymnentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [
      PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymnentRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class PaymentModule { }
