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

  async showNextPage() {
    // Set your secret key. Remember to switch to your live secret key in production!
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    const stripe = require('stripe')('sk_test_51HHnw5DvUDPuOCevae3dZOAYcWeMMEMq3lvNaBJO0GQVZNtrK9Av6H9mO2K4XPjOs3JJnp1UoY7l3S7PfY2gH5pq00HhY396Yd');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://example.com/cancel',
    });
  }

}
