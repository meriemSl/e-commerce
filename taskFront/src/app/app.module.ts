import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductsComponent } from './components/products/products.component';
import { PanierComponent } from './components/panier/panier.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductService } from './services/productServices/product.service';
import { OrderService } from './services/orderServices/order.service';
import { HttpClientModule } from '@angular/common/http';
import { CommandesItemsComponent } from './components/commandes/commandes-items/commandes-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleProductComponent,
    ProductsComponent,
    PanierComponent,
    CheckoutComponent,
    CommandesComponent,
    NavbarComponent,
    FooterComponent,
    CommandesItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ProductService , PanierComponent , OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
