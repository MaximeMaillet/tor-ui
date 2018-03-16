import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../Services/api.service";
import * as jwt_decode from 'jwt-decode';

const TOKEN_NAME = 'tor.ui';

@Injectable()
export class AuthService {

  constructor(
    public router: Router,
    private apiService: ApiService,
  ) {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    console.log(decoded);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(): boolean {
    const token = this.getToken();

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);

    if (date === undefined) {
      return false;
    }

    return (new Date(date)) <= (new Date());
  }

  login(email: string, password: string) {
    return this.apiService.login({email, password}).subscribe(
      (data) => {
        this.setToken(data['token']);
        this.router.navigate(['torrents']);
      },
      (err) => this.apiService.handleError(err)
    );
  }

  logout() {
    return this.apiService.logout().subscribe(
      (data) => {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['']);
      },
      (err) => this.apiService.handleError(err)
    );
  }
}