import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../../student-data.service';
import { Student } from '../../student';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  student: Student;
  viewMode = true;


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
