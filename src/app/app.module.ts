import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./Component/Header/header.component";
import {FooterComponent} from "./Component/Footer/footer.component";

import {HomeModule} from './Component/Home/home.module';
import {LoginModule} from './Component/Login/login.module';
import {SubscribeModule} from './Component/Subscribe/subscribe.module';

import {ApiService} from './Services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule.forRoot(),
      LoginModule,
      SubscribeModule,
      HomeModule,
      ApiService,
      HttpClientModule,
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
    ],
    providers: [
      CookieService
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
