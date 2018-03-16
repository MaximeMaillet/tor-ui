import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import { FormsModule }   from '@angular/forms';

import {HeaderComponent} from '../Header/header.component';
import {TorrentBarComponent} from '../TorrentBar/torrentbar.component';

import {TorrentModuleComponent} from "./torrent.component";
import {ToasterService} from "angular2-toaster";
import {NgProgressModule} from "@ngx-progressbar/core";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    NgProgressModule.forRoot(),
  ],
  declarations: [
    TorrentModuleComponent,
    HeaderComponent,
    TorrentBarComponent,
  ],
  providers: [
  ],
  bootstrap: [
    TorrentModuleComponent
  ]
})

export class TorrentModule {}
