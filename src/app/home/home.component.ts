import { Component, OnInit } from '@angular/core';

import { Product } from '../menu/Shared/product';
import { ProductService } from '../Services/product.service';
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

  product: Product = new Product;
  leaders: Leader = new Leader;;
  promotion: Promotion = new Promotion;
  constructor(private productservice: ProductService,private leaderService: LeaderService,
    private promotionservice: PromotionService) { }

  ngOnInit(): void {
    this.product = this.productservice.getFeaturedProduct();
    this.leaders = this.leaderService.getFeaturedLeader();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
