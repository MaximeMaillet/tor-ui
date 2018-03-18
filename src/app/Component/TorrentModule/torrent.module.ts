import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";

import {HeaderComponent} from '../Header/header.component';
import {TorrentBarComponent} from '../TorrentBar/torrentbar.component';

import {TorrentModuleComponent} from "./torrent.component";
import {NgProgressModule} from "@ngx-progressbar/core";
import {TorrentFilesModal} from "../Modals/TorrentFilesModal/torrentfiles.modal";
import {FilesBarComponent} from "../FilesBar/filesbar.component";
import {WebSocketService} from "../../Services/websocket.service";
import {TorrentAddModal} from "../Modals/TorrentAddModal/torrentadd.modal";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    NgProgressModule.forRoot(),
  ],
  declarations: [
    TorrentFilesModal,
    TorrentAddModal,
    TorrentModuleComponent,
    HeaderComponent,
    TorrentBarComponent,
    FilesBarComponent,
  ],
  providers: [
    WebSocketService
  ],
  bootstrap: [
    TorrentModuleComponent
  ]
})

export class TorrentModule {}
