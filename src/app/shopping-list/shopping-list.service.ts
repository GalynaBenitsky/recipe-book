import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Shripms', 15),
    new Ingredient('Cherry Tomato', 7),
    new Ingredient('Pasta', 100),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }
  addIngredient(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
