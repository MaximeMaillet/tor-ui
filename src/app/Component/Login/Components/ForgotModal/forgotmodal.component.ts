import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../../../Services/api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'login-modal',
  templateUrl: './forgotmodal.component.html',
  styleUrls: ['./forgotmodal.component.scss'],
})
export class ForgotModalComponent {
  @ViewChild("loginModal") private engineModal: TemplateRef<any>;
  constructor(
    private router: Router,
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  open() {
    this.modalService.open(this.engineModal);
  }

  submitted = false;
  model = {email: ''};

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
