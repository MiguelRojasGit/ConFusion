import { Injectable } from '@angular/core';
import {Dish} from '../menu/Shared/dish'
import {DISHES} from '../menu/Shared/dishes'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Dish[] {

    return DISHES;
  }
}
