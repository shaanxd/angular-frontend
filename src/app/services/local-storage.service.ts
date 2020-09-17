import { Injectable } from '@angular/core';
import {Authentication} from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    // Check storage availability here
  }

  setValue(key: string, value: any) {
      if (!value) {
          return;
      }
      localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string) {
      const val = localStorage.getItem(key);

      if (val == null) {
          return null;
      }
      return JSON.parse(val);
  }

  clearValue(key: string) {
      localStorage.removeItem(key);
  }
}
