import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import {NgProgressModule} from "@ngx-progressbar/core";
import {TorrentFilesModal} from "../../Component/Modals/TorrentFilesModal/torrentfiles.modal";
import {TorrentBarComponent} from "../../Component/TorrentBar/torrentbar.component";
import {FilesBarComponent} from "../../Component/FilesBar/filesbar.component";
import {TorrentAddModal} from "../../Component/Modals/TorrentAddModal/torrentadd.modal";
import {WebSocketService} from "../../Services/websocket.service";
import {TorrentsComponent} from "./Components/Torrents/torrents.component";
import {LoggedModule} from "../Logged/logged.module";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    NgProgressModule.forRoot(),
    LoggedModule,
  ],
  declarations: [
    TorrentsComponent,
    TorrentFilesModal,
    TorrentBarComponent,
    FilesBarComponent,
  ],
  providers: [
    WebSocketService
  ],
  bootstrap: [
    TorrentsComponent
  ]
})

export class TorrentModule {}
