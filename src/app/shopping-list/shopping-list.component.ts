import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListAction from './store/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    //this.store.select('shoppingList').subscribe();
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChange.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  onEditItem(index: number) {
    //this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
