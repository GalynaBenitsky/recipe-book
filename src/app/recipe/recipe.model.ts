import { RecipeComponent } from './recipe.component';

export class Recipe {
  public name: string;
  public description: string;
  public imgURL: string;

  constructor(name: string, description: string, imgURL: string) {
    this.name = name;
    this.description = description;
    this.imgURL = imgURL;
  }
}
