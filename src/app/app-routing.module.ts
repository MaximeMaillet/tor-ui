import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './Component/Subscribe/subscribe.component';
import { PasswordComponent} from './Component/Password/password.component';
import { TorrentModuleComponent } from "./Component/TorrentModule/torrent.component";

import {AuthService} from './Services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent,
  },
  {
    path: 'authenticate/password/:token',
    component: PasswordComponent,
  },
  {
    path: 'torrents',
    component: TorrentModuleComponent,
    canActivate: [AuthService],
    data: {
      expectedRole: ['user', 'admin']
    }
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }