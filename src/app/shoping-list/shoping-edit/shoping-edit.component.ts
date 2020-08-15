import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output   } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputCRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(e) {
    e.preventDefault();
    const ingName = this.nameInputCRef.nativeElement.value ;
    const  ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName , ingAmount);
    this.slService.addIngredients(newIngredient);
  }

}
