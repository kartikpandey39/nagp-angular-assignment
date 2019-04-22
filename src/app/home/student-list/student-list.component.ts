import { Component, OnInit, OnChanges } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Student, Category } from '../student';
import { StudentFilterPipe } from '../student-filter.pipe';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  confirmationDialogActionName = 'Delete';

  // Intial value is '' to select 'All Students' in select option
  categorySelected = '';

  searchQuery: string;

  constructor( public dialog: MatDialog, private studentDataService: StudentDataService) { }

  ngOnInit() {
    this.studentDataService.getStudents().subscribe(data => this.students = data);

  }

  /**
   * Refresh student list from DB service
   */
  refreshStudentList() {
    this.studentDataService.getStudents().subscribe(data =>  this.students = data);
  }

  /**
   *
   * @param id : Id of student to delete
   * Shows a confirmation dialog for user consent
   */
  deleteDialog(id: number ): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {action: this.confirmationDialogActionName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteStudentConfirmed(id);
      }
    });
  }

  /**
   *
   * @param id: Id of student to delete
   * Delete student from current list
   */
  deleteStudentConfirmed(id) {
    this.studentDataService.deleteStudent(id).subscribe(data => {
      this.refreshStudentList();
    });
  }

}
