import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../Guards/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class IndexComponent implements OnInit{
  public left = true;
  public right = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!this.authService.isTokenExpired()) {
      this.router.navigate(['torrents']);
    }
  }

  slide() {
    this.left = !this.left;
    this.right = !this.right;
  }
}
