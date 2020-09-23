import { Subscription } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipies.model';
import { RecipieService } from '../recipie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit , OnDestroy{
 
  recepies: Recipe[];
  subscription: Subscription;
  constructor(private recipieService: RecipieService , private router: Router , private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.subscription = this.recipieService.recipeChanged.subscribe((recipes: Recipe[])=>{
      this.recepies = recipes;
    })
    this.recepies = this.recipieService.getRecipies();
  }
  
  onNewRecipe() {
    this.router.navigate(['new'] , {relativeTo: this.route});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

