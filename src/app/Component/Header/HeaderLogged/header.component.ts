import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../Guards/AuthService';
import conf from '../../../conf';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header.component.html',
  styleUrls: ['../header.global.scss', './header.component.scss']
})

export class HeaderLoggedComponent {
  version = environment.version;

  constructor(
    private authService: AuthService,
  ) {}

  logout() {
    this.authService.logout();
  }

  isAdmin() {
    return this.authService.isGranted(conf.roles.admin);
  }
}
