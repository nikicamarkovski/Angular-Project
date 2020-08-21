import { Component, OnInit  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {


  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(form : NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    this.slService.addIngredients(newIngredient);
  }

}
