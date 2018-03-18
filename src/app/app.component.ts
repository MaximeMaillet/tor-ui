import { Component } from '@angular/core';
import {ToasterConfig, ToasterService} from "angular2-toaster";
import {environment} from "../environments/environment";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  version = environment.version;

  constructor(private titleService: Title) {
    this.titleService.setTitle(`ToTor v${this.version}`);
  }

  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    limit: 1,
  });
}
