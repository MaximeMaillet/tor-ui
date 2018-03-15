import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@NgModule({})

export class ApiService {

  base_url = 'http://localhost:8090';

  constructor(private http:HttpClient) {}

  login(body) {
    return this.http.post(`${this.base_url}/api/authenticate/login`, body, {withCredentials: true});
  }

  subscribe(body) {
    return this.http.post(`${this.base_url}/api/authenticate/subscribe`, body);
  }

  forgot(body) {
    return this.http.post(`${this.base_url}/api/authenticate/forgot`, body);
  }

  password(body) {
    return this.http.post(`${this.base_url}/api/authenticate/password`, body);
  }

  logout() {
    return this.http.get(`${this.base_url}/authenticate/logout`);
  }

  getMe() {
    return this.http.get(`${this.base_url}/api/users/me`, {
      withCredentials: true
    });
  }
}