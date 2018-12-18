import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstWord'
})
export class CapitalizeFirstWordPipe implements PipeTransform {

  transform(value: string): any {
    return value.length ?
      value.charAt(0).toUpperCase() + value.slice(1) :
      '';
  }

}
