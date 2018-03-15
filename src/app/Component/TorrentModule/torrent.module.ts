import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import {HeaderComponent} from '../Header/header.component';

import {TorrentModuleComponent} from "./torrent.component";

@NgModule({
  imports: [
    NgbModule,
  ],
  declarations: [
    TorrentModuleComponent,
    HeaderComponent,
  ],
  providers: [

  ],
  bootstrap: [
    TorrentModuleComponent
  ]
})

export class TorrentModule {}
