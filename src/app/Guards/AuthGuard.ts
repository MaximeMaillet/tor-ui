import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {AuthService} from './AuthService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    private authService: AuthService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.authService.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}