import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { recipeModel } from '../recipeModel';
import {ServiceData} from '../../services/main.service';
import { RecipeDetail} from '../recipeDetail/recipeDetail'

@Component({
    selector:'recipe-list',
    templateUrl:'./recipe-list.html'

})

export class Recipe {

@Output() sharedata:EventEmitter<any> = new EventEmitter<any>();

 recipe:recipeModel[] =[];
 constructor(private recipeService:ServiceData) {

  }

@ViewChild(RecipeDetail) 
private child: RecipeDetail
@ViewChild('myValue') inputText
 
dataList(data){
        console.log(data)
        this.recipe = data
    }

    parentdata=[];
    childData(data) {
    this.parentdata = data;
    console.log(this.parentdata)
    }

    changeData() {
        this.child.Description = 'Data as changed'
    }
    mydata:recipeModel
listsharedata(event){
    this.mydata = event
    console.log(event)
}

sendData() {
    let data = this.inputText.nativeElement.value;
    console.log(data)
}
senRecipe(event){
  this.sharedata.emit(event);
  this.recipeService.updateStatus.emit(event);
 
  
}
listdata;

recipeList(){
    this.recipeService.recipeListData().subscribe(
        data=>this.dataList(data)
    )
}

    ngOnInit() {
      this.recipeList()  
    }
}