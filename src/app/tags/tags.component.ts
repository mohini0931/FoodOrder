import { Component, Input, OnInit } from '@angular/core';
import { Foods } from '../models/food';
import { Tag } from '../models/tags';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() foodTag: any;
  tags: Tag[] = [];
  foodTagArr: any = [];
  temp:any;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if(this.foodTag){
      this.foodTag.tags.map((tag:any) => {
        this.temp = this.foodService.getAllTag().find(t => t.name == tag);
        if(this.temp)
           this.foodTagArr.push(this.temp);
      })
      this.tags = this.foodTagArr;
    }else{
      this.tags = this.foodService.getAllTag();
    }
    
  }

}
