import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
  recipie: Recipie;
  id: number;
  constructor(private recepieService: RecipieService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
        // tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
        this.recipie = this.recepieService.getRecipe(this.id);
    }
     );
    }
  onAddToShoppingList() {
    this.recepieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }
  onEditRecipe() {
     this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id , 'edit'] , {relativeTo: this.route});
  }

}
