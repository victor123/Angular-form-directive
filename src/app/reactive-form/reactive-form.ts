import { Component, OnInit } from "@angular/core";
import {FormGroup,FormBuilder,Validators} from "@angular/forms"

@Component({
    selector:'reactform',
    templateUrl:'./reactive-form.html'
})

export class ReactiveFormList implements OnInit {
    genders = ['male','female']
    seletor= ['Html','CSS3','Javascript','Jquery','Angular']
    signform:FormGroup;
    submitAttempt:boolean = false;
    constructor(private fb:FormBuilder){
    
    }
    
    onSubmit(value:any) {
        console.log(this.signform)
    console.log(value)
    

    }
    ngOnInit(){
        this.signform = this.fb.group({
            email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
            selecter:['',[Validators.required]],
        listForm:this.fb.group({
            name:['',[Validators.required,Validators.maxLength(15), Validators.minLength(4)]], 
            lastname:['',[Validators.required]]
         }),
            gender:['male',[Validators.required]]
        
    })
    

    }

}