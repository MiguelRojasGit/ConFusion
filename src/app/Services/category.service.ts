import { Injectable } from '@angular/core';
import { CATEGORIES } from '../menu/Shared/categories';
import { Category } from '../menu/Shared/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }


  getCategories():Category[] {

    return CATEGORIES;
  }
  getCategory(id: string): Category {
    return CATEGORIES.filter((category) => (category.id === id))[0];
  }

  getFeaturedCategory(): Category {
    return CATEGORIES.filter((category) => category.featured)[0];
  }
}
