import { Injectable } from '@angular/core';
import { Admin} from '../login/admin';
import { Student, Category, DocumentList} from '../home/student';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DbCollection } from './Interface/DbCollection';

@Injectable({
  providedIn: 'root'
})

/**
 * Data Service mimicing a database.
 */
export class DataAccessService implements InMemoryDbService {
  /**
   * Function to initialize database with values
   */
  createDb() {
    const admins: Admin[] = [
      { id: 11, userName: 'admin', password: 'admin', displayName: 'Admin User' },
      { id: 13, userName: 'kartik', password: 'kartik', displayName: 'Kartik Pandey' },
      { id: 12, userName: 'admin1', password: 'admin1',  displayName: 'Admin User' }
    ];
    const students: Student[]  = [
      { id: 11, name : 'Gohan', category: Category.Domestic ,
      documents: [{name: 'Domicile certificate', value: true},
      {name: 'Birth certificate', value: true},
      {name: 'Previous marksheets', value: true},
      {name: 'Police clearance', value: true},
      {name: 'Passport', value: false},
      {name: 'Signed declaration', value: true}],
      dob : new Date('05/11/95'), fathername: 'Goku', mothername: 'Chi Chi', lastclassscore: 96 },
      { id: 12, name : 'Goten', category: Category.Domestic ,
      documents: [{name: 'Domicile certificate', value: true},
      {name: 'Birth certificate', value: true},
      {name: 'Previous marksheets', value: true},
      {name: 'Police clearance', value: false},
      {name: 'Passport', value: false},
      {name: 'Signed declaration', value: true}],
       dob : new Date('09/11/93'), fathername: 'Goku', mothername: 'Chi Chi', lastclassscore: 96 },
      { id: 13, name : 'Trunks', category: Category.International ,
      documents: [{name: 'Domicile certificate', value: true},
      {name: 'Birth certificate', value: true},
      {name: 'Previous marksheets', value: true},
      {name: 'Police clearance', value: true},
      {name: 'Passport', value: true},
      {name: 'Signed declaration', value: true}],
       dob: new Date('06/10/91'), fathername: 'Vegeta', mothername: 'Bulma', lastclassscore: 96 }
    ];

    const documents: DocumentList[] = [
      {id: 1, category: Category.Domestic, documents: [
        {name: 'Domicile certificate', ismandatory: true},
        {name: 'Birth certificate', ismandatory: true},
        {name: 'Previous marksheets', ismandatory: true},
        {name: 'Police clearance', ismandatory: false},
        {name: 'Passport', ismandatory: false},
        {name: 'Signed declaration', ismandatory: true},
      ]},
      {id: 2, category: Category.International, documents: [
        {name: 'Domicile certificate', ismandatory: true},
        {name: 'Birth certificate', ismandatory: true},
        {name: 'Previous marksheets', ismandatory: true},
        {name: 'Police clearance', ismandatory: true},
        {name: 'Passport', ismandatory: true},
        {name: 'Signed declaration', ismandatory: true},
      ]}];
    return {admins, students, documents};
  }

  /**
   *
   * @param collection : Class implementing DbColetion interface
   * Overrides the genId method to ensure that there is always a id assigned as per value initial value setted.
   * If the provided array is empty, the method below returns the initial number (11).
   * if the provided array is not empty, the method below returns the highest id available for collection + 1.
   */
  genId(collection: DbCollection[]): number {
    return collection.length > 0 ? Math.max(...collection.map(row => row.id)) + 1 : 11;
  }


}
