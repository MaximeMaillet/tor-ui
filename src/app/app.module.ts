import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./Header/header.component";

import {HomeModule} from './Home/home.module';
import {LoginModule} from "./Login/login.module";

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule.forRoot(),
      LoginModule,
      HomeModule,
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
