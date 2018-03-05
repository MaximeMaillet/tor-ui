import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {ApiService} from '../../../../Services/api.service';
import {ForgotModalComponent} from "../ForgotModal/forgotmodal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'form-login',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
  entryComponents: [ForgotModalComponent]
})

export class LoginformComponent {
  constructor(
    private router: Router,
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  open(c) {
    this.modalService.open(c);
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