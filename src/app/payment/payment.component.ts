import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: []
})
export class PaymentComponent implements OnInit {
  selectedUser: string;
  constructor() { }

  ngOnInit() {
    this.selectedUser = localStorage.getItem('Name');
  }

}
