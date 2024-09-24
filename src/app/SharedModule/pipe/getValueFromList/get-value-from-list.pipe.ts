import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValueFromList'
})
export class GetValueFromListPipe implements PipeTransform {

  transform(
    lists: Object[],
    value: unknown | unknown[],
    findKey: string = 'id',
    displayKey: string | string[] = 'label',
    defaultValue: unknown = '--'
  ): unknown {
    let findItem;

    if (!Array.isArray(displayKey)) {
      findItem = lists.find((item) => item[findKey] == value);
      if (findItem) findItem = findItem[displayKey];
    } else {
      findItem = lists.find((item) => item[findKey] == value);
      if (findItem) {
        findItem = displayKey
          .map((key, index) => {
            return index == 0
              ? findItem[key]
              : '(' + findItem[key] + ')';
          })
          .join(' ');
      }
    }

    return findItem || defaultValue;
  }
}
