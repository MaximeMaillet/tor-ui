import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './Component/Subscribe/subscribe.component';
import { PasswordComponent} from './Component/Password/password.component';
import { TorrentModuleComponent } from "./Component/TorrentModule/torrent.component";

import {AuthGuard} from './Guards/AuthGuard';

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
    canActivate: [AuthGuard],
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