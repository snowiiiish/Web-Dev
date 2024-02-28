import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../data/products';

@Pipe({
  name: 'searchItems',
})
export class SearchItemsPipe implements PipeTransform {
  transform(items: Product[], search: string): Product[] {
    return items.filter((i) =>
      i.name.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
}