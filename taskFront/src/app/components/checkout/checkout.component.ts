import { Component, OnInit } from '@angular/core';
import { total } from 'cart-localstorage' 
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: any;

  constructor() { }

  ngOnInit() {
    this.total = total()
  }

}
