import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {
  }

  navigateToHome() {
      this.router.navigate(['']);
  }

  navigateToProduct(id: String) {
    this.router.navigate(['product', id])
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
