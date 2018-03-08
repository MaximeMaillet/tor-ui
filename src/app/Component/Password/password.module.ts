import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import {PasswordComponent} from './password.component';

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
  ],
  declarations: [
    PasswordComponent,
  ],
  providers: [

  ],
  bootstrap: [
    PasswordComponent
  ]
})

export class PasswordModule {}
