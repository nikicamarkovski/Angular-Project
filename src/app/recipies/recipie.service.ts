import {Recipie} from './recipies.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';

@Injectable()

export class RecipieService {
    recipieSelected = new EventEmitter<Recipie>();
   private recepies: Recipie[] = [
        new Recipie('a test recepie' , 'simple test' ,  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMo0c1p0j7T8aN3T94g9M2wwgJdKs23CcQxWdZyE89AsGwhbTH&usqp=CAU', [
            new Ingredient('Meat' , 1),
            new Ingredient('meat2' , 2)

        ]),
        new Recipie('test2' , 'simple test2' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY6-o7Rs08VGQQV6LTtnK_EtQ4G6XAiqpU0YSyoZGIBggLM8sJ&usqp=CAU' , [
            new Ingredient('Bread1', 10),
            new Ingredient('bread2' , 2)
        ])
    ];
    constructor(private slService: ShoppingListService){}
    getRecipies() {
        return this.recepies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients);
    }
}
