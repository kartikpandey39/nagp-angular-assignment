import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Student, Category } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navLinks: any[];
  constructor(private router: Router) {
  }

  ngOnInit() {
    // Initialize navbar links
    this.navLinks = [
      {
        label: 'On Board',
        link: 'onboard',
        index: 0
      }, {
        label: 'Student List',
        link: 'list',
        index: 1
      }];
  }
}
