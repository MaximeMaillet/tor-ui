import {Injectable, NgModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Torrent} from "../Models/Torrent";
import {ToasterService} from 'angular2-toaster';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable()
export class ApiService {
  base_url = 'http://localhost:8090';

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {}

  handleError(err) {
    this.toasterService.pop('error', `Error ${err.status}`, err.error.message ? err.error.message : 'Une erreur est survenue');
  }

  login(body) {
    return this.http.post(`${this.base_url}/api/authenticate/login`, body, httpOptions);
  }

  subscribe(body) {
    return this.http.post(`${this.base_url}/api/authenticate/subscribe`, body, httpOptions);
  }

  forgot(body) {
    return this.http.post(`${this.base_url}/api/authenticate/forgot`, body, httpOptions);
  }

  password(body) {
    return this.http.post(`${this.base_url}/api/authenticate/password`, body, httpOptions);
  }

  logout() {
    return this.http.get(`${this.base_url}/authenticate/logout`, httpOptions);
  }

  getMe() {
    return this.http.get(`${this.base_url}/api/users/me`, httpOptions);
  }

  getTorrents() {
    return this.http.get<Torrent[]>(`${this.base_url}/api/torrents`, httpOptions);
  }

  getTorrent(id) {
    return this.http.get<Torrent>(`${this.base_url}/api/torrents/${id}`, httpOptions);
  }
}