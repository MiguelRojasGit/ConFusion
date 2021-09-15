import { Component, OnInit } from '@angular/core';

import { Dish } from '../menu/Shared/dish';
import { DishService } from '../Services/dish.service';
import { Promotion } from '../menu/Shared/promotion';
import { PromotionService } from '../Services/promotion.service';
import { Leader } from '../menu/Shared/leader';
import { LeaderService } from '../Services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish = new Dish;
  leaders: Leader = new Leader;;
  promotion: Promotion = new Promotion;
  constructor(private dishservice: DishService,private leaderService: LeaderService,
    private promotionservice: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishservice.getFeaturedDish();
    this.leaders = this.leaderService.getFeaturedLeader();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
