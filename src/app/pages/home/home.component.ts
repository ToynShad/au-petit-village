import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductsService, Product } from '../../services/products.service';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SortByPricePipe,
    FilterByNamePipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // ✅ Obligatoire pour le filtre et le tri
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  // ✅ Liste des produits (vide au départ)
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Appel du service pour récupérer les données
    this.productsService.getProducts().subscribe(p => {
      this.products = p;
      console.log('Produits chargés :', this.products);
    });
  }

  onSortChange(order: 'asc' | 'desc') {
    this.sortOrder = order;
  }
}