import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';
import { PaymnentRoutingModule } from './payment-routing.module';
import { PaymentDetailsComponent } from './payment-details/payment-details/payment-details.component';

@NgModule({
  declarations: [
      PaymentComponent,
      PaymentDetailsComponent
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
