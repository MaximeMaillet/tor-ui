import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../../../Services/api.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'login-modal',
  templateUrl: './forgotmodal.component.html',
  styleUrls: ['./forgotmodal.component.scss'],
})
export class ForgotModalComponent {
  @ViewChild("loginModal") private engineModal: TemplateRef<any>;
  @ViewChild("loginForm") private myForm;
  private modal: NgbModalRef;
  submitted = false;
  model = {email: ''};

  constructor(
    private router: Router,
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  async open() {
    this.modal = await this.modalService.open(this.engineModal);
  }

  onSubmit() {
    this.api.forgot(this.model).subscribe(
      (data) => {
        this.modal.close();
      },
      (err) => {
        console.log(err);
      },
    );

    this.submitted = true;
  }
}
