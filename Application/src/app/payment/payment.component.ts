import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: []
})
export class PaymentComponent implements OnInit {
  selectedUser: string;
  handler: any = null;

  constructor(private router: Router, private readonly toastr: ToastrService) { }

  ngOnInit() {
    this.selectedUser = localStorage.getItem('Name');
    this.loadStripe();
  }

  showNextPage() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HHnw5DvUDPuOCevAPpKjHzCJ4BABijTAwQpQvCGN8ilmpsQrHf4qMzMqHhiS0LhAIh0ihsoi7VbwKq4bcGCjH2n00fYycPNiQ',
      locale: 'auto',
      source: () => {
        this.onClose();
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2160000
    });
  }

  onClose() {
    this.toastr.success('Payment Successful!!');
    this.router.navigate(['/payment-details']);
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HHnw5DvUDPuOCevAPpKjHzCJ4BABijTAwQpQvCGN8ilmpsQrHf4qMzMqHhiS0LhAIh0ihsoi7VbwKq4bcGCjH2n00fYycPNiQ',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }

}
