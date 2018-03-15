import {Injectable, OnInit} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./api.service";

@Injectable()
export class AuthService implements CanActivate {

  constructor(
    public router: Router,
    private cookieService: CookieService,
    private apiService: ApiService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.cookieService.check('connect.sid')) {
      this.router.navigate(['']);
      return;
    }
    this.apiService.getMe().subscribe(
      (data) => {
        const userRoles = data['roles'].split(',');
        let isOk = false;
        for(const i in userRoles) {
          if(route.data.expectedRole.indexOf(userRoles[i]) !== -1) {
            isOk = true;
          }
        }

        if(!isOk) {
          this.router.navigate(['']);
        }
      },
      (err) => {
        if(err) {
          this.router.navigate(['']);
        }
      }
    );
    // const expectedRole = route.data.expectedRole;
    // if (
    //   !this.auth.isAuthenticated() ||
    //   tokenPayload.role !== expectedRole
    // ) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}