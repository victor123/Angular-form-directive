import { Injectable } from "@angular/core";

@Injectable()
export class Service1 {
    constructor() { }
    firstData() {
        console.log("This is First Service")
    }
}