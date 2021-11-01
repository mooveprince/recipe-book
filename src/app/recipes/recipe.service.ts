import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [ 
    new Recipe("apple pie", 
      "Super yummy apple description", 
      "https://cdn.pixabay.com/photo/2017/05/17/02/51/apple-pie-2319691_960_720.jpg"),

    new Recipe("Mango Pickle", 
      "Traditional mango pickle", 
      "https://cdn.pixabay.com/photo/2021/02/03/10/45/pickle-5977456_960_720.jpg")

    ]

    getRecipes () {
        return this.recipes.slice();
    }

    

}