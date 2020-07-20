import { Component, OnInit } from '@angular/core';
import { total } from 'cart-localstorage' 
import { OrderService } from 'src/app/services/orderServices/order.service';
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  total: any;
  orders: any;

  constructor(private commandeService : OrderService) { }

  ngOnInit() {
    this.total = total();
    this.commandeService.showAllOrders().subscribe (result => {
      console.log(result['hydra:member'])
      this.orders = result['hydra:member']
  })
  }

}
