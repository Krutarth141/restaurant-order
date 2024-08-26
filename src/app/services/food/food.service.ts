import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string): Foods[] {
    if(tag == 'all')
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return [
      {name:'all',count:8},
      {name:'fastfood',count:8},
      {name:'burger',count:1},
      {name:'pizza',count:1},
      {name:'lunch',count:0},
      {name:'french fries',count:1},
      {name:'noodles',count:1},
      {name:'pasta',count:1},
      {name:'lasagna',count:1},
      {name:'cheese balls',count:1},
      {name:'manchurian',count:1},
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Burger',
        cooktime: '10-20',
        favorite: true,
        price: 70,
        origins: ['American'],
        star: 4.5,
        imageurl: '/assets/one.jpg',
        tags: ['fastfood', 'burger'],
      },
      {
        id: 2,
        name: 'Cheesy Pizza',
        cooktime: '20-30',
        favorite: true,
        price: 200,
        origins: ['italy'],
        star: 4.7,
        imageurl: '/assets/two.jpg',
        tags: ['fastfood', 'pizza', 'lunch'],
      },
      {
        id: 3,
        name: 'French Fries',
        cooktime: '10-20',
        favorite: true,
        price: 50,
        origins: ['American'],
        star: 4.4,
        imageurl: '/assets/three.jpg',
        tags: ['fastfood', 'french fries'],
      },
      {
        id: 4,
        name: 'Noodles',
        cooktime: '15-25',
        favorite: true,
        price: 150,
        origins: ['china'],
        star: 4.0,
        imageurl: '/assets/four.jpeg',
        tags: ['fastfood', 'noodles', 'lunch'],
      },
      {
        id: 5,
        name: 'Pasta',
        cooktime: '15-25',
        favorite: true,
        price: 150,
        origins: ['italy'],
        star: 4.2,
        imageurl: '/assets/five.jpeg',
        tags: ['fastfood', 'pasta', 'lunch'],
      },
      {
        id: 6,
        name: 'Lasagna',
        cooktime: '20-30',
        favorite: true,
        price: 200,
        origins: ['italy'],
        star: 4.6,
        imageurl: '/assets/six.jpg',
        tags: ['fastfood', 'lasagna', 'lunch'],
      },
      {
        id: 7,
        name: 'Cheese balls',
        cooktime: '10-20',
        favorite: true,
        price: 100,
        origins: ['brazil'],
        star: 4.5,
        imageurl: '/assets/seven.jpg',
        tags: ['fastfood', 'cheese balls'],
      },
      {
        id: 8,
        name: 'Machurian',
        cooktime: '20-30',
        favorite: true,
        price: 200,
        origins: ['india'],
        star: 4.7,
        imageurl: '/assets/eight.jpg',
        tags: ['fastfood', 'manchurian', 'lunch'],
      },
    ];
  }
}
