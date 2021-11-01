import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient ('Syrup', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
