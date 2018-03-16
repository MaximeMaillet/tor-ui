import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToasterModule, ToasterService} from 'angular2-toaster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterComponent} from "./Component/Footer/footer.component";

import {SubscribeModule} from './Component/Subscribe/subscribe.module';
import {PasswordModule} from './Component/Password/password.module';
import {TorrentModule} from './Component/TorrentModule/torrent.module';

import {ApiService} from './Services/api.service';
import {AuthService} from './Services/auth.service';

@NgModule({
    imports: [
      BrowserModule,
      NgbModule.forRoot(),
      HttpClientModule,
      BrowserAnimationsModule,
      ToasterModule.forRoot(),
      AppRoutingModule,
      PasswordModule,
      TorrentModule,
      SubscribeModule,
    ],
    declarations: [
      AppComponent,
      FooterComponent,
    ],
    providers: [
      CookieService, AuthService, ToasterService, ApiService
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {

}
