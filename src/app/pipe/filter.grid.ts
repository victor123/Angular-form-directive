import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filterPipe'
})
export class filterTrp implements PipeTransform {
    transform(value: any, filterString: string, inputTxt: string) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        var filterArry = [];
        for (const item of value) {
            if (item[inputTxt] === filterString) {
                filterArry.push(item)
            }
        }

        return filterArry;

    }
}