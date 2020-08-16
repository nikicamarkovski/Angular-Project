import { RecipiesDetailComponent } from './recipies/recipies-detail/recipies-detail.component';
import { RecipeStartComponent } from './recipies/recipe-start/recipe-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  {path: '' , redirectTo: '/recipes' , pathMatch : 'full'},
  {path : 'recipes' , component : RecipiesComponent , children: [
    {path: '' , component : RecipeStartComponent},
    {path: 'new' , component: RecipeEditComponent},
    {path: ':id' , component: RecipiesDetailComponent },
    {path: ':id/edit' , component: RecipeEditComponent}
  ]},
  {path : 'shoping-list' , component : ShopingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
