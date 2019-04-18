import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], selected: any[], key?: string, keySelected: string = key): any {
    if (selected.length === 0) {
      return list;
    }

    return list.filter(item => {
      if (key) {
        return selected.findIndex(i => i[keySelected] === item[key]) === -1;
      }

      return !selected.includes(item);
    });
  }

}
