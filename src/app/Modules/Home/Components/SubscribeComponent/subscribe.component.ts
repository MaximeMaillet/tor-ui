import {Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../../../Services/api.service';

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.html',
})

export class SubscribeComponent {
  @Output() logIn = new EventEmitter();

  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  submitted = false;

  model = {email: '', password:''};

  onSubmit() {
    this.api.subscribe(this.model).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
    );

    this.submitted = true;
  }

  toLogin() {
    console.log('emit');
    this.logIn.emit();
  }
}