import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student, DocumentList } from './student';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// http header required for saving data in database
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DocumentDataService {

  private baseUrl = 'api/documents';

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
   * Get list of documents from data service
   */
  getDocuments(): Observable<DocumentList[]> {
    return this.http.get<DocumentList[]>(this.baseUrl).pipe(
      catchError(this.handleError<DocumentList[]>('getDocuments', []))
    );
  }

  /**
   *
   * @param id: ID of document, based on which student data will be retrieved from data service
   */
  getDocument(id: number): Observable<DocumentList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<DocumentList>(url).pipe(
      catchError(this.handleError<DocumentList>('getStudent'))
    );
  }



}
