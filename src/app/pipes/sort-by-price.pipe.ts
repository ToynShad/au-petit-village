import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model'; // Chemin corrigé

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {
  transform(products: Product[], sortOrder: string): Product[] {
    if (!products) return [];
    return [...products].sort((a, b) =>
      sortOrder === 'desc' ? b.price - a.price : a.price - b.price
    );
  }
}