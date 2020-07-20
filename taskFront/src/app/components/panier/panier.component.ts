import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panierServices/panier.service';
import { remove , total ,list , quantity} from 'cart-localstorage'  
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cardItem: any;
  cartTotal: number = 0;
  cartItems = [
 
  ];
  products = []
  total: any;
  constructor(private cart : PanierService) { }

  ngOnInit() {
    console.log(list())
    this.products = list()
    this.total = total()
  
  }
  decreaseQuantity(id : any )
  {
    quantity(id,-1)
    this.products = list()
  }

  increaseQuantity(id : any )
  {
    quantity(id,+1)
    this.products = list()
  }
  removeItem(id : any) {
    remove(id)
    this.products = list()
  }
  addProductToCart(product: any) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price
    //       })
    //     }
    //   }
    // }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
