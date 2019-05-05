import {Pipe, PipeTransform} from '@angular/core';
import Translations from './translations';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
  translations = new Translations();


  transform(value: string): string {
    return this.translations[value];
  }
}
