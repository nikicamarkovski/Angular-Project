import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {
  recipieSelected: Recipie;
  constructor( private recipieService: RecipieService) { }

  ngOnInit(): void {
    this.recipieService.recipieSelected.subscribe(
      (recipie : Recipie) => {
        this.recipieSelected = recipie;
      } 
    )
  }

}
