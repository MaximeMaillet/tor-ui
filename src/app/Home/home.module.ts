import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    NgbModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [

  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
