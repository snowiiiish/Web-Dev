import { Component, OnInit } from '@angular/core';
import { Product} from '../../data/products' 
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  term = '';
  items: Product[] = [];
  loading = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe((data) => {
      this.items = data;
      this.loading = false;
    });
  }
}