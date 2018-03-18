import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IndexComponent} from "./Components/IndexComponent/index.component";
import {HeaderAnonymousComponent} from "../../Component/Header/HeaderAnonymous/header.component";
import {CommonModule} from "@angular/common";
import {SubscribeComponent} from "./Components/SubscribeComponent/subscribe.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./Components/LoginComponent/login.component";
import {ForgotModalComponent} from "../../Component/Modals/ForgotModal/forgotmodal.component";

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    IndexComponent,
    HeaderAnonymousComponent,
    SubscribeComponent,
    LoginComponent,
    ForgotModalComponent,
  ],
  providers: [
  ],
  bootstrap: [
    IndexComponent
  ]
})

export class HomeModule {}
