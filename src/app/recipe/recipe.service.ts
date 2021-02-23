import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shrimp Pasta',
      'Shrimp tomato pasta',
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      [
        new Ingredient('Shripms', 15),
        new Ingredient('Cherry Tomato', 7),
        new Ingredient('Pasta', 100),
      ]
    ),
    new Recipe(
      'Cheese Pizza',
      'Pizza with extra cheese',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      [new Ingredient('Chesse', 300), new Ingredient('Dough', 100)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredient(ingredients);
  }
}
