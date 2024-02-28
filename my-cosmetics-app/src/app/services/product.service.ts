import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../data/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private URL = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }
  getURL(): string {
    return this.URL;
  }
}