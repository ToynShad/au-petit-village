import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model'; // Chemin corrigé

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products) return [];
    if (!searchTerm) return products;

    const lower = searchTerm.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(lower));
  }
}