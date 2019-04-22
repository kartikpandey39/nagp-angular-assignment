import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  backUrl: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Based on user selection navigate to one of the links provided
  redirect(navigateTo: string) {
    switch (navigateTo) {
      case 'home':
      this.router.navigate(['/home']);
      break;

      case 'login':
      this.router.navigate(['login']);
      break;

      case 'list':
      this.router.navigate(['/home/list']);
      break;
    }

  }

}
