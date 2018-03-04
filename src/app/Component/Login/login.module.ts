import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import {LoginComponent} from "./login.component";
import {LoginformComponent} from './Components/loginform.component';

@NgModule({
    imports: [
      NgbModule,
      FormsModule,
    ],
    declarations: [
      LoginComponent,
      LoginformComponent
    ],
    providers: [

    ],
    bootstrap: [
      LoginComponent
    ]
})

export class LoginModule {}
