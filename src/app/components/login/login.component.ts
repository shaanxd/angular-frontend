import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';
import { Authentication } from '../../models';
import { AuthApiService } from '../../services/auth-api.service';
import { AuthStorageService } from '../../services/auth-storage.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: Boolean = false;
  hasError: String = null;
  loginForm: FormGroup = this.formBuilder.group({
    email: ['',[
      Validators.required('Email is required.')
    ]],
    password: ['', [
      Validators.required('Password is required.'),
      Validators.minLength(4, 'Password should contain at least 4 characters'),
      Validators.maxLength(10, 'Password cannot contain more than 10 characters.')]
    ],
  })

  constructor(
    private formBuilder: FormBuilder,
    private authApiService: AuthApiService,
    private authStorageService: AuthStorageService,
    private navigationService: NavigationService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.isLoading = true;
    this.hasError = null;

    this.authApiService
      .authenticateUser({username: email, password: password})
      .subscribe((value: Authentication) => {
        this.isLoading = false;
        this.authStorageService.setAuthentication(value);
        this.navigationService.navigateToHome();
      }, (err: String)=> {
        this.isLoading = false;
        this.hasError = err;
      })
  }

}
