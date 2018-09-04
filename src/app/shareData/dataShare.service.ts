import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { recipeModel } from '../recipe/recipeModel';


@Injectable()

export class ShareDataService {
    shareComponentData = new EventEmitter<recipeModel>();
    private Url = 'assets/recipe-list.json';
    constructor(private _http: Http) { }

    shareData() {
        return this._http.get(this.Url).map(res => res.json());

    }

}