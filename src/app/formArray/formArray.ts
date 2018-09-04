import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from "@angular/forms"

@Component({
    selector: 'form-array',
    templateUrl: './formArray.html'
})

export class FormArrayList implements OnInit {
    seletor = ['Html', 'CSS3', 'Javascript', 'Jquery', 'Angular']
    form: FormGroup
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            selecter: ['', Validators.required],
            items: this.fb.array([this.createProduct()])
        })

    }

    onSubmit(event) {
        console.log(event)

    }
    createProduct(): FormGroup {
        return this.fb.group({
            lastname: ['', Validators.required]
        })
    }

    get items(): FormArray {
        return this.form.get('items') as FormArray
    }

    addForm() {
        const control = this.createProduct();
        this.items.push(control);
    }
    deleteRow(i) {
        const control = <FormArray>this.form.get('items');
        control.removeAt(i)
    }
    ngOnInit() {

    }

}