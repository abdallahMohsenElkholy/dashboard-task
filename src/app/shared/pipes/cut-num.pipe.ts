import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutNum'
})
export class CutNumPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 20 ? value.split('').slice(0, 16).join('') + '...' : value;
    
  }

}
