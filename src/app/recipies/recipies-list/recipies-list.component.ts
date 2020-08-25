import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
 
  recepies: Recipie[];
  constructor(private recipieService: RecipieService , private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies = this.recipieService.getRecipies();
  }
  
  onNewRecipe() {
    this.router.navigate(['new'] , {relativeTo: this.route});
  }

}
