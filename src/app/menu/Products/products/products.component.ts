import { Component, OnInit } from '@angular/core';
import { Product } from '../../Shared/product';
import {ProductService} from '../../../Services/product.service'
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../Shared/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product[];
  selectedProduct: Product;


  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //const id = this.route.snapshot.params['id'];
    this.product = this.productService.getProducts();
  }
  onSelect(product: Product) {
    this.selectedProduct = product;
  }

}
