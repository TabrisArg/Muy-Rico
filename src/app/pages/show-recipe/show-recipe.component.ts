import { Recipe } from './../../classes/recipe';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss']
})
export class ShowRecipeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private RecipeService: RecipeService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const recipeId = params.get('id');
        this.recipe = this.RecipeService.getRecipeById(parseInt(recipeId));
        console.log(this.recipe);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  back() {
    this.location.back();
  }

  deleteRecipe(): void {
    this.RecipeService.deleteRecipe(this.recipe.id);
    this.router.navigate(['']);
  }
}

