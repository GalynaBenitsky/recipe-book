import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://recipe-book-d5aba-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((responce) => {
        console.log(responce);
      });
  }
  fetchRecipe() {
    this.http
      .get<Recipe[]>('https://recipe-book-d5aba-default-rtdb.firebaseio.com/recipes.json')
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
