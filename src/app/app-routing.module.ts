import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './Component/Subscribe/subscribe.component';
import { PasswordComponent} from './Component/Password/password.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent,
  },
  {
    path: 'authenticate/password/:token',
    component: PasswordComponent,
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