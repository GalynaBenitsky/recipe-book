import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = '';
    let recipeImageURL = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipes(this.id);
      recipeName = recipe.name;
      recipeImageURL = recipe.imgURL;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imageURL: new FormControl(recipeImageURL),
      description: new FormControl(recipeDescription),
    });
  }
}
