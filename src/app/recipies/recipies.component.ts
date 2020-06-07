import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipieSelected : Recipie;
  constructor() { }

  ngOnInit(): void {
  }

}
