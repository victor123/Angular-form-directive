import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { recipeModel } from '../recipeModel';

@Component({
    selector: 'recipe-detail',
    templateUrl: './recipeDetail.html'
})

export class RecipeDetail {
    @Input() shareList:recipeModel;
    Description:string = "child data";
    Ingridents:string= "child list"
    
    @Output() seletdata:EventEmitter<any> = new EventEmitter<any>();
    Recipe: recipeModel[] = [];
    constructor() {}
   

    selectedList = "loop";
    sendData(event) {

        this.seletdata.emit(this.selectedList)
        console.log(this.selectedList)
    }
    
    ngOnInit() {

    }
}