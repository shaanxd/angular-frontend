import { Injectable } from '@angular/core';
import { CoreApiService } from './core-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private coreApiService: CoreApiService) { }

  getProducts() {
    const endpoint = "products/";
    return this.coreApiService.get(endpoint, null);
  }

  getProduct(id: String) {
    const endpoint = `products/${id}`;
    return this.coreApiService.get(endpoint, null);
  }
  
}
