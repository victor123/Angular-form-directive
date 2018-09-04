import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Recipe } from "./recipe-list/recipe-list";
import { RecipeItem } from "./recipe-item/recipe-item";
import { RecipeDetail } from "./recipeDetail/recipeDetail";

@NgModule({
    declarations:[
        Recipe,
        RecipeItem,
        RecipeDetail],
    imports:[CommonModule]
})
export class RecipeMainModule {

}