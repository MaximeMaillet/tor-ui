import { Component } from '@angular/core';
import {ApiService} from '../../Services/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    constructor(private api: ApiService) {}
}
