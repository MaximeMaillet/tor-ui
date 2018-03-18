import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./Components/admin.component";
import {LoggedModule} from "../Logged/logged.module";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    LoggedModule,
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [
  ],
  bootstrap: [
    AdminComponent
  ]
})

export class AdminModule {

}
