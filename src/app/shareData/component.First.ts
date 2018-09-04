import { Component, OnInit } from "@angular/core";
import { ShareDataService } from "./dataShare.service";
import { Observable } from 'rxjs/Observable';
import { recipeModel } from '../recipe/recipeModel';

@Component({
    selector:'componentFirst',
    template:`
  <ul class="list-group ">
  <li class="list-group-item ad-float" *ngFor="let recipeList of recipe" (click)="crassData(recipeList)">
    <div class="row">
      <div class="col-md-8">
        <p>
          {{recipeList.name}}
        </p>
        <p>
          {{recipeList.description}}
        </p>

      </div>
      <div class="col-md-4">
        <img class="img-responsive" [src]="recipeList.imagePath" />
      </div>
    </div>
  </li>
</ul>`
})

export class ComponentFirst implements OnInit{
    recipe:recipeModel[]=[];
    constructor(private _service:ShareDataService){}

    getData() {
        this._service.shareData().subscribe(
            data => this.fetchData(data)
        )
    }
    fetchData(data) {
    this.recipe = data;
    console.log("xzx",this.recipe)
    }
    crassData(event) {
    this._service.shareComponentData.emit(event)
      
    }
    ngOnInit(){
    this.getData();
    }
}