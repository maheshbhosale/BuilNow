import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CompanyModule} from './company/company.module';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationComponent } from './auth/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyModule } from './property/property.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule,
    PropertyModule,
    PaymentModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
