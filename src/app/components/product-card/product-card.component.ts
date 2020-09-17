import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  onProductClick() {
    //  Do something
  }

  onViewClick() {
    this.navigationService.navigateToProduct(this.product.id);
  }
}
