import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormService } from "./formService";

@Component({
    selector:"td-form",
    templateUrl:'./TD.form.html'
})

export class formTemplate implements OnInit {
    @ViewChild('f') suggestName:NgForm
    genders = ['male','female']
    seletor =['Html','CSS3','Javascript','Jquery','Angular','Ajax']


    constructor(private _shareData:FormService) {

    }
     ngOnInit(){

     }

   onSubmit(form) {
    this._shareData.FormData.emit(form)
    this.suggestName.form.reset()
     
    }
}