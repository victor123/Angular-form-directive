import {Injectable,EventEmitter } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { recipeModel } from '../recipe/recipeModel';

import 'rxjs/add/operator/map';
@Injectable()
export class ServiceData {
url = 'assets/data.json';
recipe = 'assets/recipe-list.json'

constructor(private _http:Http) {}

updateStatus = new EventEmitter<recipeModel>();
getData(){
    return this._http.get(this.url).map(res => res.json());
}

recipeListData():Observable<any> {
    return this._http.get(this.recipe).map(res=> res.json());
}


}