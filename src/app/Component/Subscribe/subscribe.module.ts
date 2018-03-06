import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import {SubscribeComponent} from './subscribe.component';

@NgModule({
    imports: [
      NgbModule,
      FormsModule,
    ],
    declarations: [
      SubscribeComponent,
    ],
    providers: [

    ],
    bootstrap: [
      SubscribeComponent
    ]
})

export class SubscribeModule {}
