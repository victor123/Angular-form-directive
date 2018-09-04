import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
import { ServiceData } from '../services/main.service';
import { Observable } from 'rxjs/Observable';
import { RecipeDetail } from '../recipe/recipeDetail/recipeDetail';


@Component({
    selector: 'router-list',
    template: `
    {{listData}}
    <button (click)="pre()" [disabled]="listData == 1"> Previous </button>

    <button (click)="gonext()" > Next </button>

    <button (click)="onBack()"> Back </button>
    `

})

export class RouterList implements OnInit {
    filterString ='';
    constructor(private activeRoute: ActivatedRoute, private router: Router) { }
    listData;


    onBack() {
        this.router.navigate(['/recipe'])
    }

    pre() {
        let id = this.listData - 1;
        this.router.navigate(['/listParams', id])
    }

    gonext() {
        let id = this.listData + 1;
        this.router.navigate(['/listParams', id])
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(
            (params: ParamMap) => {
                let id = parseInt(params['id']);
                this.listData = id
                console.log(this.listData)
            }
        )
        //   let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
        //   this.listData = id;

    }
}