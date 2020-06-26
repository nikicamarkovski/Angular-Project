import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
 @Input() recipie: Recipie;
  constructor(private recepieService: RecipieService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recepieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }

}
