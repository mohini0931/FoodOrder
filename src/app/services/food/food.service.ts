import { Injectable } from '@angular/core';
import { Foods } from "./../../models/food";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll (): Foods[] {
    // return [
    //   '/assets/food-1.jpg',
    //   '/assets/food-2.jpg',
    //   '/assets/food-3.jpg',
    //   '/assets/food-4.jpg',
    //   '/assets/food-5.jpg',
    //   '/assets/food-6.jpg',
    //   '/assets/food-7.jpg',
    //   '/assets/food-8.jpg'
    // ]
    return [

      {
        id : 1,
        price : 100,
        name : 'Hakka Noodles',
        favorite : false,
        star:  3.0,
        tags: ['FastFood', 'Noodles', 'Lunch'],
        imageUrl : '/assets/noodles.jpg',
        cookTime : '10-20 minutes',
        origins : ['Italy']
      },
      {
        id : 2,
        price : 150,
        name : 'Veg Pizza',
        favorite : false,
        star:  3.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl : '/assets/food-2.jpg',
        cookTime : '20 minutes',
        origins : ['India']
      },
      {
        id : 3,
        price : 250,
        name : 'Banana Pudding',
        favorite : false,
        star:  5.0,
        tags: ['FastFood', 'Sweet', 'Lunch'],
        imageUrl : '/assets/food-3.jpg',
        cookTime : '10-20 minutes',
        origins : ['India']
      },
      {
        id : 4,
        price : 250,
        name : 'French Fries',
        favorite : false,
        star:  4.0,
        tags: ['FastFood', 'Snacks', 'Breakfast'],
        imageUrl : '/assets/food-4.jpg',
        cookTime : '10 minutes',
        origins : ['India']
      },
      {
        id : 5,
        price : 250,
        name : 'Chocolate Milk Shake',
        favorite : false,
        star:  5.0,
        tags: ['Beverages', 'Juice', 'Lunch'],
        imageUrl : '/assets/food-5.jpg',
        cookTime : '10 minutes',
        origins : ['India']
      },
      {
        id : 6,
        price : 500,
        name : 'Donuts',
        favorite : true,
        star:  3.7,
        tags: ['FastFood', 'Sweet', 'Dinner'],
        imageUrl : '/assets/food-6.jpg',
        cookTime : '10 minutes',
        origins : ['London']
      },
      {
        id : 7,
        price : 350,
        name : 'Veg Wrap',
        favorite : false,
        star:  4.2,
        tags: ['FastFood', 'Wrap', 'Lunch'],
        imageUrl : '/assets/food-7.jpg',
        cookTime : '10-20 minutes',
        origins : ['India']
      },
      {
        id : 8,
        price : 250,
        name : 'Biryani',
        favorite : true,
        star:  5.0,
        tags: ['FastFood', 'Biryani', 'Lunch'],
        imageUrl : '/assets/food-8.jpg',
        cookTime : '10-20 minutes',
        origins : ['India']
      }
    ]
  }
}
