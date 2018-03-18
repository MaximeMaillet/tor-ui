import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './Guards/AuthGuard';

import { PasswordComponent} from './Component/Password/password.component';

import {IndexComponent} from "./Modules/Home/Components/IndexComponent/index.component";
import {TorrentsComponent} from "./Modules/TorrentModule/Components/Torrents/torrents.component";
import {AdminComponent} from "./Modules/Admin/Components/admin.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'authenticate/password/:token',
    component: PasswordComponent,
  },
  {
    path: 'torrents',
    component: TorrentsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: ['user', 'admin']
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: ['admin']
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