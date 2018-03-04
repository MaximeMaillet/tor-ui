import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from "./login.component";

@NgModule({
    imports: [
        NgbModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [

    ],
    bootstrap: [
        LoginComponent
    ]
})

export class LoginModule {
  username = 'toto';
}
