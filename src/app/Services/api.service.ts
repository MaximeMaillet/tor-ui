import {Injectable, NgModule} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Torrent} from "../Models/Torrent";
import {ToasterService} from 'angular2-toaster';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable()
export class ApiService {
  base_url = `${environment.api.base_url}/api`;

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {}

  handleError(err) {
    if(err.status === 401) {
      this.toasterService.pop('error', `UnAuthorized`, 'You don\'t have permissions.');
    } else {
      this.toasterService.pop('error', `Error ${err.status}`, err.error.message ? err.error.message : 'Une erreur est survenue');
    }
  }

  login(body) {
    return this.http.post(`${this.base_url}/authenticate/login`, body, httpOptions);
  }

  subscribe(body) {
    return this.http.post(`${this.base_url}/authenticate/subscribe`, body, httpOptions);
  }

  forgot(body) {
    return this.http.post(`${this.base_url}/authenticate/forgot`, body, httpOptions);
  }

  password(body) {
    return this.http.post(`${this.base_url}/authenticate/password`, body, httpOptions);
  }

  logout() {
    return this.http.get(`${this.base_url}/authenticate/logout`, httpOptions);
  }

  addTorrent(body) {
    return this.http.post<Torrent>(`${this.base_url}/torrents`, body);
  }

  getTorrents() {
    return this.http.get<Torrent[]>(`${this.base_url}/torrents`, httpOptions);
  }

  getTorrent(id) {
    return this.http.get<Torrent>(`${this.base_url}/torrents/${id}`, httpOptions);
  }

  downloadFile(torrentId, fileId) {
    return this.http.get(`${this.base_url}/torrents/${torrentId}/download/${fileId}`, {
      responseType: 'blob'
    });
  }

  playTorrent(id) {
    return this.http.get(`${this.base_url}/torrents/${id}/play`, httpOptions);
  }

  pauseTorrent(id) {
    return this.http.get(`${this.base_url}/torrents/${id}/pause`, httpOptions);
  }

  removeTorrent(id) {
    return this.http.delete(`${this.base_url}/torrents/${id}`, httpOptions);
  }
}