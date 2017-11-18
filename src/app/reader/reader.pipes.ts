import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fnmDate'
})

export class FNMDatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (!value)
            return value;
        if (typeof value === "string") {
            return value.substr(4, 2) + "/" + value.substr(6, 2) + "/" + value.substr(0, 4);
        }
    }
}
