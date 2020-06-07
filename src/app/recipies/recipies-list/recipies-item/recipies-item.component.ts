import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipies.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipie : Recipie;
 @Output() recipieSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipieSelected.emit();
  }

}
