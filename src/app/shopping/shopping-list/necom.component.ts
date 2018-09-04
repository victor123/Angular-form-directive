import {Component,Input} from '@angular/core';
import { ServiceData} from '../../services/main.service';
import { recipeModel } from '../../recipe/recipeModel';
import {Service2} from '../../services/service2'


@Component({
    selector:'recipe-add',
    templateUrl:'./necom.html',
    providers: [Service2]
})
export class newComponent {
    viewMode = '1';
    @Input() arrydata:recipeModel
   arraydata:recipeModel[] = [];
    constructor (private service:ServiceData, private _commonService:Service2) {

    }
   
    appenddata(data) {
        console.log(data)
        this.arraydata = data;
      
    }
    errortxt() {
    
    }
   
   fetchData() {
       this.service.recipeListData().subscribe(
           data=> this.appenddata(data),
           error =>this.errortxt()
       )
   }
   addlist(event){
  this.arraydata.push(event)
   }
   ngOnInit() {
    this.fetchData();
    this._commonService.do();
   
   }
}