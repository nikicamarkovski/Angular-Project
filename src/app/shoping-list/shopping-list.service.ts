import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientChanged =  new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private  ingredients: Ingredient[] = [
        new Ingredient('apples' , 5),
        new Ingredient('Tomatos' , 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      getIngredient(index: number) {

          return this.ingredients[index];
      }
      addIngredients (ingridient : Ingredient) {
            this.ingredients.push(ingridient);
            this.ingredientChanged.next(this.ingredients.slice());
      }
      addIngredient(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      updateIngredient(index: number , newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
      }
};