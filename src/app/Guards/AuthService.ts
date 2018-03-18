import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from "../Services/api.service";
import * as jwt_decode from 'jwt-decode';

const TOKEN_NAME = 'tor.ui.token';
const USER_NAME = 'tor.ui.user';

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

  getUser(): object {
    return JSON.parse(localStorage.getItem(USER_NAME));
  }

  setUser(user: object): void {
    localStorage.setItem(USER_NAME, JSON.stringify(user));
  }

  isGranted(role) {
    // const decoded = jwt_decode(this.getToken());
    // const userRole = new Buffer(decoded.user.roles).toString();
    // return userRole & role;
    return true;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

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
        this.setUser(data['user']);
        this.router.navigate(['torrents']);
      },
      (err) => this.apiService.handleError(err)
    );
  }

  logout() {
    return this.apiService.logout().subscribe(
      (data) => {
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem(USER_NAME);
        this.router.navigate(['']);
      },
      (err) => this.apiService.handleError(err)
    );
  }
}