import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { ShowRecipeComponent } from './pages/show-recipe/show-recipe.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', component: HomeComponent},
    {path: 'recipes/new', component: NewRecipeComponent},
    {path: 'recipes/edit/:id', component: EditRecipeComponent},
    // show one recipe//
    {path: 'recipes/:id', component: ShowRecipeComponent},
    // this will match everything else//
    {path: '**', component: HomeComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
