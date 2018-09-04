import { Component, OnInit } from '@angular/core';
import { ServiceData } from '../services/main.service';
import {Observable} from 'rxjs/Observable';
import { RecipeDetail } from '../recipe/recipeDetail/recipeDetail';
import { Router } from '@angular/router';


@Component({
    selector:'router-param',
    template:`
    <input type='text' [(ngModel)]="filterStatus">
    <ul class="list-group">
    <li (click)="goList(list)" class="list-group-item" *ngFor = "let list of listData | filterPipe:filterStatus:'name'"> {{list.name | sorten:10 }} </li>
    </ul>
    
    `

})

export class RouterParams implements OnInit {
    filterStatus = '';
listData:RecipeDetail[]=[];
constructor(private _service:ServiceData, private routs:Router){}

goList(list){
    this.routs.navigate(['/listParams',list.id])

}

ngOnInit() {
    this._service.getData().subscribe(
    (data)=> {
        this.listData = data;
        console.log(data)
    }
    )

}
}