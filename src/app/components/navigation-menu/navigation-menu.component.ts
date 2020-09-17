import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from '../../services/auth-storage.service';
import { AuthApiService } from '../../services/auth-api.service';
import { Authentication } from '../../models';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  isAuthenticated: Boolean = false;
  isAuthLoading: Boolean = false;

  constructor(private authStorageService: AuthStorageService, private authApiService: AuthApiService) {}

  ngOnInit(): void {
    this.authStorageService.getAuthentication().subscribe(this.onAuthChange);
  }

  onAuthChange = (authentication: Authentication) => {
    if (authentication == null) {
      this.isAuthenticated = false;
      return
    }
    this.isAuthenticated = true;
  }

  onLogoutClick() {
    this.authStorageService.setLoading(true);

    setTimeout(() => {
      this.authStorageService.setAuthentication(null);
      this.authStorageService.setLoading(false);
    }, 2000)
  }

}
