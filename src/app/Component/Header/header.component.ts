import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';

import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from '../../Guards/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  version = environment.version;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService,
  ) {}

  logout() {
    this.authService.logout();
  }

  addTorrent() {

  }
}
