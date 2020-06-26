import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
        new Ingredient('apples' , 5),
        new Ingredient('Tomatos' , 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      };
      addIngredients (ingridient : Ingredient) {
            this.ingredients.push(ingridient);
            this.ingredientChanged.emit(this.ingredients.slice());
      }
      addIngredient(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}