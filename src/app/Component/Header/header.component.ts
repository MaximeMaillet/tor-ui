import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';

import {ApiService} from '../../Services/api.service';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  version = environment.version;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  logout = async() => {
    this.apiService.logout().subscribe(
      (data) => {
        this.cookieService.delete('connect.sid');
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
    );
  }
}
