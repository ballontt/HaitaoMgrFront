import { Injectable } from '@angular/core';
import { Router, CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserService,
              private router:Router
              ) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
      let url = state.url;
      if(this.user.isLoggedIn())
      {
          return true;
      }
      this.user.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
  }
}