import { Component, OnInit } from "@angular/core";
import { ShareDataService } from "./dataShare.service";
import { recipeModel } from '../recipe/recipeModel';


@Component({
    selector: 'componentSecond',
    template: `
 <div *ngIf="recipe">
 <p>{{recipe.name}}</p>
 <p>{{recipe.description}}</p>
 </div>   
 <componentFirst></componentFirst>
 `
})

export class ComponentSecond implements OnInit {
    recipe: recipeModel
    constructor(private _service: ShareDataService) { }

    ngOnInit() {
        this._service.shareComponentData.subscribe(

            (recipeList: recipeModel) => {
                this.recipe = recipeList;
            }
        )
    }
}