import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any;

  constructor(private http: HttpClient) { }

  showAllProduct():Observable<HttpResponse<any>>
   {
    return this.http
           .get<any>('http://localhost:8000/apip/products')
           .pipe(
              map(result => {
                 this.products =  result
                 return result ;
              })
           )
    }
showOneProduct(productId: String):Observable<HttpResponse<any>>
{
  return this.http
         .get<any>('http://localhost:8000/apip/products/'+productId)
         .pipe(
           map( result => {
             return result ;
           }) 
           )
}
}
