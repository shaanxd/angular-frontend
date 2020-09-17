import { Injectable } from '@angular/core';
import { CoreApiService } from './core-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private coreApiService: CoreApiService) { }

  authenticateUser(data: {}) {
    const endpoint = "auth/login-user";
    const body = {
      ...data
    }
    return this.coreApiService.post(endpoint, null, body);
  }
  
}
