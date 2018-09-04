import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})


export class FilterPipe {
    transform(value: any, arr: any) {
        if (arr[0] == '') {
            return value
        }
        if (arr.length = 0) {
            return value
        }
        var filterArray = [];
        arr.filter(function (a, b) {
            var fData = arr.indexOf(a) === b;

            filterArray.push(fData);
        })
        return filterArray;
    }

}
