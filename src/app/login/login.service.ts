import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { tap, filter} from 'rxjs/operators';



@Injectable()
export class LoginService {

  public adminExist: boolean ;
  public currentAdmin: Admin;
  private admins: Admin[];
  private url = 'api/';
  constructor(private http: HttpClient) {
    this.getAdmins().subscribe(data => this.admins = data);
   }

  /* Get admins info from server */
  getAdmins(): Observable<Admin[]> {
    const adminUrl = this.url + 'admins';
    return this.http.get<Admin[]>(adminUrl).pipe(
    );
  }

  validateUser(admin: Admin): boolean {
    const validateUser =  this.admins.find(admn => (admin.password === admn.password) && (admin.userName === admn.userName));
    if (validateUser) {
      this.adminExist = true;
      this.currentAdmin = validateUser;
      localStorage.setItem('admin', JSON.stringify(validateUser));
    }

    return this.adminExist;
  }

  signOut() {
    let message = '';
    if (localStorage.getItem('admin')) {
      localStorage.removeItem('admin');
      this.adminExist = false;
      this.currentAdmin = null;
      message = 'Signed out successfully !';
    } else {
      message = 'Already signed out !';
    }
    // Message can be logged or a alert can be generated here
  }

}
