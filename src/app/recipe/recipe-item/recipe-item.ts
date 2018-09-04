import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipeModel } from '../recipeModel';
import { ServiceData } from '../../services/main.service';

@Component({
    selector:'recipe-item',
    templateUrl:'./recipe-item.html'

})

export class RecipeItem {
    serviceData:any[]=[];
   @Output() selectShareData:EventEmitter<any> = new EventEmitter<any>();
   @Input() recipe:recipeModel;
    constructor(private _service:ServiceData) {
 
            this._service.updateStatus.subscribe(
                (data) => {
                this.serviceData = data
                }
            )
     
        
    
     }
    

    ngOnInit() {
        
    }

    selectData(){
        this.selectShareData.emit()
    }
}