import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.API_URI}/login`, data)
  }

  singup(data: any) {
    return this.http.post(`${this.API_URI}/signup`, data)
  }

}
