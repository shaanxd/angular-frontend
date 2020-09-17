import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images : {src: String, alt: String}[] = []
  products: Product[] = []
  productsLoading: Boolean = true;
  productsError: String = null;

  constructor(private productApiService: ProductApiService) { }

  ngOnInit(): void {
    this.images = [
      {
        src: "https://via.placeholder.com/1000x300.png?text=Sample+Carousel+1",
        alt: "Sample"
      },
      {
        src: "https://via.placeholder.com/1000x300.png?text=Sample+Carousel+2",
        alt: "Sample"
      },
      {
        src: "https://via.placeholder.com/1000x300.png?text=Sample+Carousel+3",
        alt: "Sample"
      }
    ]
    this.onGetProductsFromApi();
  }

  onGetProductsFromApi() {
    this.productsLoading = true;
    this.productsError = null;

    this.productApiService.getProducts().subscribe(val => {
      this.products = [...val];
      setTimeout(() => {
        this.productsLoading = false;
      }, 1000)
    }, err => {
      this.productsError = err;
      setTimeout(() => {
        this.productsLoading = false;
      }, 1000)
    })
  }

}
