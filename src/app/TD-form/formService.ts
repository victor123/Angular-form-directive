import { Injectable, OnInit, Output,EventEmitter } from "@angular/core";


@Injectable()

export class FormService implements OnInit {
@Output() FormData:EventEmitter<any> = new EventEmitter<any>();

ngOnInit(){

    }

}