import { Injectable } from "@angular/core";
import {Service1} from '../services/service1';

@Injectable()

export class Service2{
 constructor(private _service1: Service1){}
 do(){
    this._service1.firstData();
    console.log("Second Service")
 }
}