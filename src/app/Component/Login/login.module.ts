import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import {LoginComponent} from './login.component';
import {LoginformComponent} from './Components/LoginForm/loginform.component';
import {ForgotModalComponent} from './Components/ForgotModal/forgotmodal.component';

@NgModule({
    imports: [
      NgbModule,
      FormsModule,
    ],
    declarations: [
      LoginComponent,
      LoginformComponent,
      ForgotModalComponent
    ],
    providers: [

    ],
    bootstrap: [
      LoginComponent
    ]
})

export class LoginModule {}
