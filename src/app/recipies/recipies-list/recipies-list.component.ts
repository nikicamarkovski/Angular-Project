import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
 @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recepies: Recipie[] = [
      new Recipie('a test recepie' , 'simple test' ,  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMo0c1p0j7T8aN3T94g9M2wwgJdKs23CcQxWdZyE89AsGwhbTH&usqp=CAU'),
      new Recipie('test2' , 'simple test2' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY6-o7Rs08VGQQV6LTtnK_EtQ4G6XAiqpU0YSyoZGIBggLM8sJ&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipieSelected(recipie : Recipie) {
    this.recipieWasSelected.emit(recipie)
  }

}
