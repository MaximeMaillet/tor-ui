import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../../../Services/api.service';

@Component({
  selector: 'form-subscribe',
  templateUrl: './subscribeform.html',
  styleUrls: ['./subscribeform.scss'],
})

export class SubscribeformComponent {
  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  submitted = false;

  model = {email: '', password:''};

  onSubmit() {
    this.api.subscribe(this.model).subscribe(
      (data) => {
        // this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
    );

    this.submitted = true;
  }
}