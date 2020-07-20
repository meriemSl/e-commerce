import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: any;

  constructor(private http: HttpClient) { }
  


  showAllOrders():Observable<HttpResponse<any>>
  {
   return this.http
          .get<any>('http://localhost:8000/apip/commandes')
          .pipe(
             map(result => {
                this.orders =  result
                return result ;
             })
          )
   }

   create(orderData): Observable<HttpResponse<any>> {
    
    return this.http
        .post<any>('http://localhost:8000/apip/commandes', orderData)
        .pipe(
            map(result => {
                return result;
            })
        );
  }
  
}
