import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productServices/product.service';
import { Router } from '@angular/router';
import { add, total ,list } from 'cart-localstorage' 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService , private router : Router) { }
  products : any ;
  ngOnInit() {

    this.productService.showAllProduct().subscribe (result => {
      console.log(result['hydra:member'])
      this.products = result['hydra:member']
  })
  }


  seeDetail(id : string){
    this.router.navigate(['/product/'+id]);
  }

  addToCart(product : any)
    {
      add(product)
      console.log(list())

    }

  

}
