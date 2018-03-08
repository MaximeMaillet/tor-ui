import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@NgModule({})

export class ApiService {

  base_url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) {}

  login(body) {
    return this.http.post(`${this.base_url}/authenticate/login`, body, {withCredentials: true});
  }

  subscribe(body) {
    return this.http.post(`${this.base_url}/authenticate/subscribe`, body);
  }

  forgot(body) {
    return this.http.post(`${this.base_url}/authenticate/forgot`, body);
  }

  password(body) {
    return this.http.post(`${this.base_url}/authenticate/password`, body);
  }
}