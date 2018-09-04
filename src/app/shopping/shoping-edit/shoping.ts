import { Component, ViewChild, ElementRef,Output,EventEmitter } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { recipeModel } from '../../recipe/recipeModel';
import { ServiceData } from '../../services/main.service';


@Component({
    selector:'shoping',
    templateUrl:'./shoping.html'

})

export class Shoping {
ingrintList:recipeModel[]=[];
@ViewChild('InputName') getinputName:ElementRef;
@ViewChild('InpuAmount') getinputAmount:ElementRef;
 form: FormGroup;
constructor(private dataService:ServiceData, private fb:FormBuilder) {
this.form = fb.group({
    'Name':["",Validators.required],
    "amount":["", Validators.required]

})

}

@Output() addRecipeList = new EventEmitter<recipeModel>();
addFiled(event) {
    const Ingrident = this.getinputName.nativeElement.value;
    const Amount = this.getinputAmount.nativeElement.value;
    event = {name:Ingrident,amount:Amount};
    console.log(event)

    this.addRecipeList.emit(event)
}


    onsubmit(event) {
     console.log(event)
    }


}