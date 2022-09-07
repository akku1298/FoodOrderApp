import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
  if(tag=='All')
  return this.getAll();
  else
  return this.getAll().filter(food => food.tags?.includes(tag));  
}

  getAllTag():Tag[]{
   return[
    { name: 'All', count: 8},
    { name: 'Fastfood', count: 8},
    { name: 'Pizza', count: 1},
    { name: 'Lunch', count: 2},
    { name: 'Chinese', count: 1},
    { name: 'Breakfast', count: 5},
   ];
  }
  getAll():Foods[]{
    return[
      {
        id:1,
    price:20,
    name:'Bread-Pakora',
    favourite:true,
    star:4,
    tags:['Breakfast','Fastfood'],
    imageUrl:'/assets/bread pakora.jpg',
    cookTime:"10-20",
    origins:['indian']

      },
      {
        id:2,
    price:45,
    name:'Burger',
    favourite:true,
    star:4.2,
    tags:['Lunch','Fastfood'],
    imageUrl:'/assets/burger.jpg',
    cookTime:"20-25",
    origins:['Italy','American']
      },
      
      
      {
        id:3,
    price:50,
    name:'French Fries',
    favourite:true,
    star:5,
    tags:['Breakfast','Fastfood'],
    imageUrl:'/assets/french fries.jpg',
    cookTime:"10-20",
    origins:['America']
      },
      
      {
        id:4,
    price:90,
    name:'Momos',
    favourite:true,
    star:4.9,
    tags:['Chinese','Fastfood'],
    imageUrl:'/assets/momos.jpg',
    cookTime:"30-35",
    origins:['China']
      },
      {
        id:5,
    price:80,
    name:'Noodles',
    favourite:true,
    star:4,
    tags:['Breakfast','Fastfood'],
    imageUrl:'/assets/noodles.jpg',
    cookTime:"30-40",
    origins:['Italy']
      },
      {
        id:6,
    price:160,
    name:'Paneer Tikka',
    favourite:true,
    star:5,
    tags:['Breakfast','Fastfood','Lunch'],
    imageUrl:'/assets/paneer tikka.jpg',
    cookTime:"55-50",
    origins:['indian']
      },
      {
        id:7,
    price:100,
    name:'Pizza',
    favourite:true,
    star:4.5,
    tags:['Fastfood', 'Pizza'],
    imageUrl:'/assets/pizza.jpg',
    cookTime:"20-30",
    origins:['Italy']
      },
      {
        id:8,
    price:20,
    name:'Samosa',
    favourite:true,
    star:3,
    tags:['Breakfast','Fastfood'],
    imageUrl:'/assets/samosa.jpg',
    cookTime:"10-20",
    origins:['indian']
      }
    ];
    
  }
}
