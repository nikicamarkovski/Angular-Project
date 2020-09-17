import { RecipieService } from './../recipie.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeForm: FormGroup;
  constructor(private route: ActivatedRoute , private recipeService: RecipieService) { }

  ngOnInit(): void {
 
    this.route.params.subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +params['id'];
        // tslint:disable-next-line: no-string-literal
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit() {
    console.log(this.recipeForm);
  }
  onAddIngredient() {
   (<FormArray> this.recipeForm.get('ingredients')).push(
     new FormGroup({
       'name' : new FormControl(),
       'amount' : new FormControl()
     })
   )
  }
    private initForm() {
     
      let recipeName = '';
      let recipePath = '';
      let recipeDescription = '';
      let recipeIngredients = new FormArray([]);
      if(this.editMode){
        const recipe = this.recipeService.getRecipe(this.id);
        recipeName = recipe.name;
        recipePath = recipe.imagePath;
        recipeDescription = recipe.description;
        // tslint:disable-next-line: no-string-literal
        if(recipe['ingredients']){
          for(let ingredient of recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name , Validators.required),
                'amount' : new FormControl(ingredient.ammount , Validators.required)
              })
            )
          }
        }
        this.recipeForm = new FormGroup({
          'name' : new FormControl(recipeName , Validators.required),
          'imagePath': new FormControl(recipePath , Validators.required),
          'description': new FormControl(recipeDescription , Validators.required),
          "ingredients" : recipeIngredients
  
        })
      }
     
    }
}
