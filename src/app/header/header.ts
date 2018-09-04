import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'header-nav',
    templateUrl:'./header.html'

})

export class HeaderSection {
@Output() selectTab:EventEmitter<string> = new EventEmitter<string>();
listData:string = 'recipe';
viewList(feature:string) {
this.listData = feature
    this.selectTab.emit(feature);
    console.log('headerComponet',feature)
}

}