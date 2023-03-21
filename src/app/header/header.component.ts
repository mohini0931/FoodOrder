import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQty!: Cart;
  constructor(private cartService: CartService) { 
   this.cartQty = cartService.getCart();
  }

  ngOnInit(): void {

  }

}
