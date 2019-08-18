import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plans } from './plans';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  // private baseUrl = 'http://localhost:8000/';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  token = this.cookieService.get('usr_token');
  getAuthHeaders() {
    return new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Token ${this.token}`
    });
  }


  // Method to return plans
  getPlans(): Observable<Plans[]> {
    // GET Request
    return this.http.get<Plans[]>(environment.baseUrl + 'api/plans/', {
      headers: this.getAuthHeaders()});
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.http.post(environment.baseUrl + 'auth/', body, {headers: this.httpHeaders});
  }

  registerUser(userData) {
    const body = JSON.stringify(userData);
    return this.http.post(environment.baseUrl + 'api/users/', body, {headers: this.httpHeaders});
  }

}
