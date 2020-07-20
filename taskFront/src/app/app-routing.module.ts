import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PanierComponent } from './components/panier/panier.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { CommandesItemsComponent } from './components/commandes/commandes-items/commandes-items.component';


const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'home', component: HomeComponent } ,
  { path: 'products', component: ProductsComponent } ,
  { path: 'product/:id', component: SingleProductComponent } ,
  { path: 'checkout', component: CheckoutComponent } ,
  { path: 'panier', component: PanierComponent } , 
  { path: 'orders', component: CommandesComponent } , 
  { path: 'ordersItems', component: CommandesItemsComponent } ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
