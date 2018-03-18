import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-header-anonymous',
  templateUrl: './header.component.html',
  styleUrls: ['../header.global.scss', './header.component.scss']
})

export class HeaderAnonymousComponent {
  version = environment.version;
}
