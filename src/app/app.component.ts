import { Component } from '@angular/core';
import {ToasterConfig, ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public config: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    limit: 1,
  });
}
