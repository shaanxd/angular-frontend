import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
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
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/252820/1600x700-1.jfif",
        alt: "Sample"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
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
