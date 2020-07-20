import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productServices/product.service';
import { ActivatedRoute } from '@angular/router';
import { add } from 'cart-localstorage' 


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  private _id: string;
  product: any;

  constructor( private productService : ProductService , private route : ActivatedRoute  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this._id = params.get('id');
      
      this.productService.showOneProduct(this._id).subscribe (result => {
        console.log(result)
        this.product  = result ;
  })
     
  });
  }
  addToCart(product : any)
  {
    add(product);
  }

}
