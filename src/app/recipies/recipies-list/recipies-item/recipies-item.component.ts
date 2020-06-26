import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipies.model';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipie: Recipie;
 
  constructor(private recipieService: RecipieService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipieService.recipieSelected.emit(this.recipie);
  }

}
