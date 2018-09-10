import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://vignette.wikia.nocookie.net/thebiglebowski/images/5/58/John-goodman-thebiglebowski-2.jpg/revision/latest?cb=20111216185009'),
    new Recipe('recipe2', 'This is recipe 2',
  'http://www.origamigne.com/shop/wp-content/uploads/2018/02/Vegeta_origamigne_Migne_Huynh.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
