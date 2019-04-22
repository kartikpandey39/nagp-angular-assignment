import { Component, OnInit, Input } from '@angular/core';
import { Admin } from 'src/app/login/admin';
import { LoginService } from 'src/app/login/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: Admin;
  confirmationDialogActionName = 'Sign Out';
  constructor(private dialog: MatDialog, public loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // Check if admin exist in local storage or service property
    if ( this.loginService.currentAdmin) {
      this.admin = this.loginService.currentAdmin;
      return;
    } else if (localStorage.getItem('admin')) {
      this.admin = JSON.parse(localStorage.getItem('admin')) as Admin;
    }
  }

  /**
   * Initialize dialog component with delete message
   */
  logoutDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {action: this.confirmationDialogActionName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.logout();
      }
    });

  }

  /**
   * Logout user and navigate to login page
   */
  logout() {
    this.admin = null;
    this.loginService.signOut();
    this.router.navigate(['/login']);
  }

}
