import { NgModule } from '@angular/core';
import {HeaderLoggedComponent} from "../../Component/Header/HeaderLogged/header.component";
import {CommonModule} from "@angular/common";
import {TorrentAddModal} from "../../Component/Modals/TorrentAddModal/torrentadd.modal";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderLoggedComponent,
    TorrentAddModal,
  ],
  exports: [
    HeaderLoggedComponent,
    TorrentAddModal,
  ]
})

export class LoggedModule {}
