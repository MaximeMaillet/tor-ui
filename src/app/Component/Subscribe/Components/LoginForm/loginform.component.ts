import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {ForgotModalComponent} from "../ForgotModal/forgotmodal.component";
import {AuthService} from "../../../../Guards/AuthService";

@Component({
  selector: 'form-login',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
  entryComponents: [ForgotModalComponent]
})

export class LoginformComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  submitted = false;

  model = {email: '', password:''};

  onSubmit() {
    this.authService.login(this.model.email, this.model.password);
    this.submitted = true;
  }
}