import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString'
})
export class SortStringPipe implements PipeTransform {

  transform(values: any[], key?: string, args?: any): any {
    return values ? values.filter(item => item)
      .sort((a, b) => {
        if (key) {
          return a[key] > b[key] ? 1 : -1;
        }

        return a > b ? 1 : -1;
      }) : [];
  }

}
