import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product} from '../../data/products' 
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ItemComponent {
  @Input() item: Product;
  @Output() remove = new EventEmitter();
  likes = false;

  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  removeItem() {
    const itemId = this.item.id;
    this.remove.emit(itemId);
  }

  likeItem() {
    this.likes = !this.likes;
    this.likes ? (this.item.likes += 1) : (this.item.likes -= 1);
    this.http
      .put<Product>(
        this.productsService.getURL() + `/${this.item.id}`,
        this.item
      )
      .subscribe(() =>
        console.log(`Item ${this.item.id} updated successfully.`)
      );
  }
}
