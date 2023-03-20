import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from "../models/food";
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private foodService: FoodService) {
    route.params.subscribe(param => {
      if(param['id']){
        this.food = this.foodService.getFoodById(param['id']);
        console.log(this.food);
      }
    })
   }

  ngOnInit(): void {
  }
  AddToCart(food: Foods){
    this.foodService.addToCart(food);
    this.router.navigateByUrl('/cart-page');
  }
}
