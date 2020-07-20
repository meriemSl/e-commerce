import { Component, OnInit } from '@angular/core';
import { total } from 'cart-localstorage' 
import { OrderService } from 'src/app/services/orderServices/order.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  orderData :   any = [] ;
  constructor( private orderService : OrderService) { }

  ngOnInit() {
    this.orderData.total = total()
  }


  onItemChange(value){
    this.orderData.payementMethod = value 
  }
  
checkout()
{ console.log(this.orderData)
  this.orderData.total = total()
  this.orderService.create(this.orderData);
}

}
