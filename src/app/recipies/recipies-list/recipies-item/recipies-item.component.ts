import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipies.model';


@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipie: Recipie;
 @Input() index: number;
  

  ngOnInit(): void {
  }

  

}
