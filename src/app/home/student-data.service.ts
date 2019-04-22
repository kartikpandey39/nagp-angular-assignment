import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// http header required for saving data in database
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  private baseUrl = 'api/students';

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(opertaion: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  /**
   * Get list of students from data service
   */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl).pipe(
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  /**
   *
   * @param id: ID of student, based on which student data will be retrieved from data service
   */
  getStudent(id: number): Observable<Student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      catchError(this.handleError<Student>('getStudent'))
    );
  }

  /**
   * Function to save a new student in database
   * @param student: Student to be saved in database
   */
  //
  postStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student, httpOptions)
            .pipe(
              catchError(this.handleError<Student>('postStudent'))
              );
  }


  /**
   * Function will update a student if it exist else create a new one
   * @param student: Student to be updated in database
   */
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.baseUrl, student, httpOptions)
            .pipe(
              catchError(this.handleError<any>('updateStudent'))
              );
  }

  /**
   * Function to delete the student passed from the database
   * @param student: Can be both the student object or a number containing id of
   *                  student to be deleted
   */
  deleteStudent(student: Student | number): Observable<Student> {
  const id = typeof student === 'number' ? student : student.id;
  const url = `${this.baseUrl}/${id}`;

  return this.http.delete<Student>(url, httpOptions).pipe(
    catchError(this.handleError<Student>('deleteStudent'))
  );
  }

}
