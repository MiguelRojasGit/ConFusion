import { Component, OnInit } from '@angular/core';

import { Dish } from '../menu/Shared/dish';
import { DishService } from '../Services/dish.service';
import { Promotion } from '../menu/Shared/promotion';
import { PromotionService } from '../Services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish = new Dish;
  promotion: Promotion = new Promotion;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
