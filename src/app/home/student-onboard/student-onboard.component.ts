import { Component, OnInit } from '@angular/core';
import { Student, Category } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-onboard',
  templateUrl: './student-onboard.component.html',
  styleUrls: ['./student-onboard.component.css']
})
export class StudentOnboardComponent implements OnInit {


  student: Student;
  method = 'post'; // specify type of method used if form is submitted

  constructor( private studentDataService: StudentDataService) { }

  ngOnInit() {
  }

}
