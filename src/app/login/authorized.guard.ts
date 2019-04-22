import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url): boolean {
    // IF user exists navigate to home
    if (localStorage.getItem('admin')) {
      this.router.navigate(['/home']);
      return false;
    }
    // Navigate to the login page
    return true;
  }

}
