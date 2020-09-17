import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AuthStorageService } from './services/auth-storage.service';
import { Authentication } from './models';
import { NavigationService } from './services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  authentication: Authentication = null;
  isLoading: Boolean = false;
  authSubscription: Subscription;
  authLoadingSubscription: Subscription;

  constructor(private authStorageService: AuthStorageService, private navigationService: NavigationService) {}

  ngOnInit() {
    this.authSubscription = this.authStorageService.getAuthentication().subscribe(this.onAuthChange);
    this.authLoadingSubscription = this.authStorageService.getLoading().subscribe(this.onLoadingChange);
    
    this.authStorageService.checkAuthentication();
  }

  ngOnDestroy() {
    this.authSubscription && this.authSubscription.unsubscribe();
    this.authLoadingSubscription && this.authLoadingSubscription.unsubscribe();
  }

  onAuthChange = (value: Authentication) => {
    this.authentication = value;
  }

  onLoadingChange = (value: Boolean) => {
    this.isLoading = value;
  }
}
