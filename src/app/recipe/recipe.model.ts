import { Ingredient } from '../shared/ingredient.model';
import { RecipeComponent } from './recipe.component';

export class Recipe {
  public name: string;
  public description: string;
  public imgURL: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imgURL: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imgURL = imgURL;
    this.ingredients = ingredients;
  }
}
