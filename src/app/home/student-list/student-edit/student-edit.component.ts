import { Component, OnInit } from '@angular/core';
import { Student } from '../../student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../../student-data.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student;
  formEditDisabled = true;
  errorMessage: string;
  method = 'put';

  constructor( private route: Router, private activatedRoute: ActivatedRoute, private studentDataService: StudentDataService ) { }

  ngOnInit() {
    // Retreve id from route
    const id = this.activatedRoute.snapshot.params.id;
    if (!id) {
      this.error();
      return ;
    }
    // Get student info based on id
    this.studentDataService.getStudent(id).subscribe((data) => {
      if (!data) {
        this.error();
        return;
      }
      this.student = data;
    });
  }

  /**
   * Navigate to error page in case of any error occured
   */
  error() {
    this.route.navigate(['/error']);
  }
}
