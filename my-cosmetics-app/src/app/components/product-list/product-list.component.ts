import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Product} from '../../data/products' 
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() term: string;
  @Input() items: Product[];
  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  deleteItem(id: number, name: string) {
    this.http.delete(this.productsService.getURL() + `/${id}`).subscribe(() => {
      this.items = this.items.filter((x) => x.id !== id);
      alert(`${name} will be DELETED!`);
    });
  }