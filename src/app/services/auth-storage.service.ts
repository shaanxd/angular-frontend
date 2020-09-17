import { Injectable } from '@angular/core';
import {Authentication} from '../models';
import { BehaviorSubject, PartialObserver } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  private authentication: BehaviorSubject<Authentication> = new BehaviorSubject<Authentication>(null);
  private loading: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);
  private AUTH_KEY: string = "AUTH_KEY";

  constructor(private localStorageService: LocalStorageService) {
  }

  checkAuthentication() {
    const val = this.localStorageService.getValue(this.AUTH_KEY);
    if (val) {
      this.authentication.next(val);
    }
     this.loading.next(false);
  }

  getAuthentication(): BehaviorSubject<Authentication> {
    return this.authentication;
  }

  getLoading(): BehaviorSubject<Boolean> {
    return this.loading;
  }

  setAuthentication(authentication: Authentication) {
    this.authentication.next(authentication);
    if (authentication) {
      this.localStorageService.setValue(this.AUTH_KEY, authentication);
    } else {
      this.localStorageService.clearValue(this.AUTH_KEY);
    }
  }

  setLoading(loading: Boolean) {
    this.loading.next(loading);
  }

  setSubscriptions(authObserver: any, loadingObserver: any) {
    this.authentication.subscribe(authObserver);
    this.loading.subscribe(loadingObserver);
  }

  unSubscribe() {
    this.authentication.unsubscribe();
    this.loading.unsubscribe();
  }
}
