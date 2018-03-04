import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./Component/Header/header.component";
import {FooterComponent} from "./Component/Footer/footer.component";

import {HomeModule} from './Component/Home/home.module';
import {LoginModule} from './Component/Login/login.module';

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
      FooterComponent,
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
