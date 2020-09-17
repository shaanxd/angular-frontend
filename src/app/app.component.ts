import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AuthStorageService } from './services/auth-storage.service';
import { Authentication } from './models';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  authentication: Authentication = null;
  isLoading: Boolean = false;

  constructor(private authStorageService: AuthStorageService, private navigationService: NavigationService) {}

  ngOnInit() {
    this.authStorageService.setSubscriptions(this.onAuthChange, this.onLoadingChange);
    this.authStorageService.checkAuthentication();
  }

  ngOnDestroy() {
    this.authStorageService.unSubscribe();
  }

  onAuthChange = (value: Authentication) => {
    this.authentication = value;
  }

  onLoadingChange = (value: Boolean) => {
    this.isLoading = value;
  }
}
