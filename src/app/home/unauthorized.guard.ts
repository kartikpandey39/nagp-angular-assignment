import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnAuthorizedGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url): boolean {
    // If user does not exist navigate to login page
    if (!localStorage.getItem('admin')) {
      this.router.navigate(['/login']);
      return false;
    }
    // Else navigate to the entered url
    return true;
  }
}
