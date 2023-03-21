import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService) {
    //  let foods = foodService.getAll();
    //  cartService.addToCart(foods[1]); 
    //  cartService.addToCart(foods[3]); 
    //  cartService.addToCart(foods[5]); 
    this.setCart();
   }
  ngOnInit(): void {
   
  }
  setCart() {
    this.cart = this.cartService.getCart();  
  }
  changeQuantity(cartItem: CartItem, qty: string) {
    const quantity = parseInt(qty);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
}
