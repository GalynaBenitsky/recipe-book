import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import * as ShoppingListAction from '../shopping-list/store/shopping-list.action';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Shrimp Pasta',
  //     'Shrimp tomato pasta',
  //     'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  //     [
  //       new Ingredient('Shripms', 15),
  //       new Ingredient('Cherry Tomato', 7),
  //       new Ingredient('Pasta', 100),
  //     ]
  //   ),
  //   new Recipe(
  //     'Salad bowl',
  //     'Vegan Salad',
  //     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  //     [
  //       new Ingredient('Avocado', 0.5),
  //       new Ingredient('Cherry Tomamto', 100),
  //       new Ingredient('Chickpea', 50),
  //       new Ingredient('Sweet Potato', 100),
  //       new Ingredient('Radish', 20),
  //       new Ingredient('Letuce', 70),
  //     ]
  //   ),

  //   new Recipe(
  //     'Cheese Pizza',
  //     'Pizza with extra cheese',
  //     'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  //     [new Ingredient('Chesse', 300), new Ingredient('Dough', 100)]
  //   ),
  //   new Recipe(
  //     'Cherry Ice Cream',
  //     'Homemade cherry ice cream',
  //     'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
  //     [
  //       new Ingredient('Cherries', 200),
  //       new Ingredient('Cream', 150),
  //       new Ingredient('Sugar', 50),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
