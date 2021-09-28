import { Component, OnInit } from '@angular/core';
import { Category } from './Shared/category';
import { CategoryService } from '../Services/category.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categories=this.categoryService.getCategories()
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
  }


}
