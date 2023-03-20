import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: any = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.cart = this.foodService.getCartItems();
  }

}
