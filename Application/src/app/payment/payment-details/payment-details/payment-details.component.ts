import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  selectedUser: string;
  constructor() { }

  ngOnInit() {
    this.selectedUser = localStorage.getItem('Name');
  }

}
