import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {
  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  transform(value: any): any {
    const monthIndex = parseInt(value.toString(), 10) - 1;
    return this.months[monthIndex];
  }

}
