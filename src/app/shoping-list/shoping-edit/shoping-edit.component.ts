import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit , OnDestroy{

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
   this.subscription =  this.slService.startedEditing.subscribe((index: number)=>{
     this.editedItemIndex = index;
     this.editMode = true;
   });
  }
  onAddItem(form : NgForm) {
    const value = form.value;
    console.log(value.amount);
    const newIngredient = new Ingredient(value.name , value.amount);
    this.slService.addIngredients(newIngredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
