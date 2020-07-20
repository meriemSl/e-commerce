import { Component, OnInit } from '@angular/core';
import { remove , total ,list , quantity} from 'cart-localstorage'  


@Component({
  selector: 'app-commandes-items',
  templateUrl: './commandes-items.component.html',
  styleUrls: ['./commandes-items.component.css']
})
export class CommandesItemsComponent implements OnInit {
  products: any;
  total: any;

  constructor() { }
   
  ngOnInit() {
    this.products = list()
    this.total = total()

  }

}
