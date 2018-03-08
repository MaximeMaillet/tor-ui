import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from '../../Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './password.html',
  styleUrls: ['./password.scss']
})

export class PasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  model = {password2: '', password:'', token: ''};
  submitted = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model.token = params['token'];
    });
  }

  onSubmit() {
    this.api.password(this.model).subscribe(
      (data) => {
        console.log(data);
        // this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      },
    );

    this.submitted = true;
  }
}
