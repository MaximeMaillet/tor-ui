import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../../../Guards/AuthService";

@Component({
  selector: 'login',
  templateUrl: './login.html',
})

export class LoginComponent {
  @Output() subscribe = new EventEmitter();

  constructor(
    private authService: AuthService
  ) {}

  submitted = false;

  model = {email: '', password:''};

  onSubmit() {
    this.authService.login(this.model.email, this.model.password);
    this.submitted = true;
  }

  toSubscribe() {
    this.subscribe.emit();
  }
}