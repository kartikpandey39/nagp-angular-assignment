import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Admin;
  userNotFoundError: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.admin = new Admin();
  }

  /**
   * Validate Admin credentials and navigate to home if successful else display error
   */
  login() {
    if (this.loginService.validateUser(this.admin)) {
      this.router.navigate(['/home']);
    } else {
      this.userNotFoundError = true;
    }
  }

  reset() {
    this.admin = new Admin();
    this.userNotFoundError = false;
  }
}
