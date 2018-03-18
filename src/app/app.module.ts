import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterComponent} from "./Component/Footer/footer.component";

import {PasswordModule} from './Component/Password/password.module';
import {TorrentModule} from './Modules/TorrentModule/torrent.module';

import {ApiService} from './Services/api.service';
import {NgProgressModule} from "@ngx-progressbar/core";
import {NgProgressHttpModule} from "@ngx-progressbar/http";
import {AuthService} from "./Guards/AuthService";
import {InterceptorGuard} from "./Guards/InterceptorGuard";
import {AuthGuard} from "./Guards/AuthGuard";
import {AdminModule} from "./Modules/Admin/admin.module";
import {HomeModule} from "./Modules/Home/home.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
      BrowserModule,
      NgbModule.forRoot(),
      HttpClientModule,
      BrowserAnimationsModule,
      ToasterModule.forRoot(),
      AppRoutingModule,
      NgProgressModule.forRoot(),
      NgProgressHttpModule,
      CommonModule,
      TorrentModule,
      AdminModule,
      HomeModule,

      PasswordModule,
    ],
    declarations: [
      AppComponent,
      FooterComponent,
    ],
    providers: [
      CookieService, AuthService, ToasterService, ApiService, AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorGuard,
        multi: true,
      }
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {

}
