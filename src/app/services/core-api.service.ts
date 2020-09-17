import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreApiService {
  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  get(endpoint: string, authorization: string = null): Observable<any> {
    const headers: {} = this.createRequestHeaders(authorization);
    const url: string = this.createUrlWithEndpoint(endpoint);

    return this.httpClient
    .get<any>(url, {
      headers: headers
    })
    .pipe(catchError(this.handleHttpErrors));;
  }

  post(endpoint: string, authorization: string = null, data: any = {}): Observable<any> {
    const headers: {} = this.createRequestHeaders(authorization);
    const url: string = this.createUrlWithEndpoint(endpoint);
    const body: any = this.createRequestBody(data);

    return this.httpClient
    .post<any>(
      url,
      body,
      {headers: headers
      })
    .pipe(catchError(this.handleHttpErrors));
  }

  createUrlWithEndpoint (endpoint: string) {
    return `${this.baseUrl}/${endpoint}`
  }

  createRequestHeaders(authorization: string = null): {} {
    const headers = authorization ? {"Authorization": `Bearer ${authorization}`} : {};

    return headers;
  }

  createRequestBody(body: any) {
    return body;
  }

  handleHttpErrors(errorResponse: HttpErrorResponse) {
    let message = "";
    if (errorResponse.error instanceof ErrorEvent) {
      message = "Error occurred while connecting to the server. Please check your connection and try again."
    } else {
      message = errorResponse.error.message ? errorResponse.error.message : 'Error occured.';
    }
    return throwError(message);
  }
}
