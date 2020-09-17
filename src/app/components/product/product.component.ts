import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Authentication, Product } from 'src/app/models';
import { AuthStorageService } from 'src/app/services/auth-storage.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  product: Product;
  productLoading: Boolean = true;
  productError: String = null;
  authSubscription: Subscription;
  isAuthenticated: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productApiService: ProductApiService,
    private authStorageService: AuthStorageService,
    private navigationService: NavigationService
    ) { }

  ngOnInit(): void {
    this.authSubscription = this.authStorageService.getAuthentication().subscribe(this.onAuthChange)
    this.routeSubscription = this.route.params.subscribe(params => {
      const id = params.id;
      if (!id) {
        return;
      }
      this.getProductFromApi(id);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription && this.routeSubscription.unsubscribe();
    this.authSubscription && this.authSubscription.unsubscribe();
  }

  getProductFromApi(id: String) {
    this.productLoading = true;
    this.productError = null;

    this.productApiService.getProduct(id).subscribe(val => {
      this.product = val;
      setTimeout(() => {
        this.productLoading = false;
      }, 0);
    }, err => {
      this.productError = err;
      setTimeout(() => {
        this.productLoading = false;
      }, 1000);
    })
  }

  addProductToCart() {
    if (this.isAuthenticated) {
      // Do add to cart logic here
    } else {
      this.navigationService.navigateToLogin();
    }
  }

  onAuthChange = (val: Authentication) => {
    if (val == null) {
      this.isAuthenticated = false;
      return;
    }
    this.isAuthenticated = true;
  }

}
