import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByText',
  pure: false
})
export class FilterByTextPipe implements PipeTransform {

  transform(fruits: any, args?: any): any {
    if (fruits.length === 0) {
      return fruits;
    }

    return fruits.filter(el =>
      el.name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
  }
}
