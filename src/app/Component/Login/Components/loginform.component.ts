import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import {ApiService} from '../../../Services/api.service';

@Component({
  selector: 'form-login',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})

export class LoginformComponent {

  constructor(
    private router: Router,
    private api: ApiService,
    private cookieService: CookieService
  ) {

  }

  submitted = false;

  model = {username: '', password:''};

  onSubmit() {
    this.api.login(this.model).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
    );

    this.submitted = true;
  }
}