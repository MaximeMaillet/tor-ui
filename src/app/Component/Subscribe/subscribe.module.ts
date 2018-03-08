import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import {SubscribeComponent} from './subscribe.component';
import {SubscribeformComponent} from './Components/SubscribeForm/subscribeform.component';
import {LoginformComponent} from './Components/LoginForm/loginform.component';
import {ForgotModalComponent} from './Components/ForgotModal/forgotmodal.component';

@NgModule({
    imports: [
      NgbModule,
      FormsModule,
    ],
    declarations: [
      SubscribeComponent,
      SubscribeformComponent,
      LoginformComponent,
      ForgotModalComponent,
    ],
    providers: [

    ],
    bootstrap: [
      SubscribeComponent
    ]
})

export class SubscribeModule {}
