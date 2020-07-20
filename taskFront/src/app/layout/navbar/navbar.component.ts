import { Component, OnInit } from '@angular/core';
import { list } from 'cart-localstorage' 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemPanier: any;

  constructor() { }

  ngOnInit() {
    this.itemPanier = list().length
  }

}
