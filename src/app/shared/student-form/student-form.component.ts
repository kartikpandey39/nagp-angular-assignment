import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, ValidatorFn, Validators} from '@angular/forms';
import { Category, Document, Student, DocumentList } from 'src/app/home/student';
import { StudentDataService } from 'src/app/home/student-data.service';
import { DocumentDataService } from 'src/app/home/document-data.service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {



  // Set of input properties
  @Input() set currentStudent( value: Student) {
    this.student = value;
    this.initializeForms();  // Call initializeForm to update value recieved in setter function.
  }
  @Input() methodOnSubmit: string ;
  @Input() viewmode: boolean;

  // Form component properties
  private student: Student;
  group: FormGroup;
  documentList: DocumentList[]; // property to store total documents retrieved from DB
  documents: Document[]; // property to store document based on category selected
  redirectUrl = '/home/list';
  mandatoryCheckBoxNotSelected: boolean;

    // Value for min and max date in onboard form
  minDate = new Date('1990/01/01');
  maxDate = new Date();



  constructor( private router: Router,
               private fb: FormBuilder,
               private documentDataService: DocumentDataService,
               private studentDataService: StudentDataService) { }

  ngOnInit() {
    this.group = this.fb.group({
      id: [this.student ? this.student.id : null],
      name: [this.student ? this.student.name : '', [ Validators.required, Validators.pattern('[a-z,A-Z, ]*')]],
      dob: [this.student ? this.student.dob : '', [ Validators.required]],
      category: [this.student ? this.student.category : Category.Domestic, [ Validators.required]],
      fathername: [this.student ? this.student.fathername : '', [ Validators.required, Validators.pattern('[a-z,A-Z, ]*')]],
      mothername: [this.student ? this.student.mothername : '', [ Validators.required, Validators.pattern('[a-z,A-Z, ]*')]],
      lastclassscore: [this.student ? this.student.lastclassscore : 0, [
        Validators.required, Validators.min(0), Validators.max(100), Validators.pattern('[0-9]*')]],
        documents:  this.fb.array([])
    });
    this.documentDataService.getDocuments().subscribe(data => {
      this.documentList = data;
      this.initializeFormWithDocuments();
    });

    // Mark group as touched if a value is changed
    this.group.valueChanges.subscribe(() => {
      this.group.markAsTouched();
    });
  }


  /**
   * Get called after input property "student" is changed
   * Set initial state of form based on input properties
   */
  initializeForms() {

    if (this.student) {
      this.group.controls.id.setValue(this.student.id);
      this.group.controls.name.setValue(this.student.name);
      this.group.controls.dob.setValue(this.student.dob);
      this.group.controls.category.setValue(this.student.category);
      this.group.controls.fathername.setValue(this.student.fathername);
      this.group.controls.mothername.setValue(this.student.mothername);
      this.group.controls.lastclassscore.setValue(this.student.lastclassscore);

      // Update chechkboxes based on student category
      if (this.documentList) {
        this.initializeFormWithDocuments();
      }
    }
  }

  /**
   * Fill form 'Document List' based on category of form
   */
  initializeFormWithDocuments() {

    const document = this.getDocumentsFromDocumentList(this.documentList, this.group.get('category').value);
    this.documents = document;
    document.map( (elem, i) =>  this.documentForms.push(this.fb.control(this.student ? this.student.documents[i].value : false)));

    if (this.viewmode) {
      this.group.disable();
    }

  }

  // 'documents' getter
  get documentForms() {
    return this.group.get('documents') as FormArray;
  }

  // Retrieve documents based on category
  getDocumentsFromDocumentList( docLists: DocumentList[], category) {
    const doclist = docLists.find((docls) => docls.category === category);
    return doclist.documents;
  }

  /**
   * Reset form and clear all values entered.
   */
  resetDocument() {
    // toggle document list based on input
    const currentCategory =  this.group.get('category').value;
    this.documents = this.getDocumentsFromDocumentList(this.documentList, currentCategory);

    // validate checkboxes with new document list
    this.checkCheckBoxValid();
  }


  /**
   * To check if mandatory checkboxes are selected.
   */
  checkCheckBoxValid() {
    const totalCheckbox = this.group.get('documents').value;

    if (this.documents && this.documents.length === totalCheckbox.length) {
      const mandatoryFieldNotSelected = this.documents.filter((doc, i ) => {
        if (doc.ismandatory) {
          return totalCheckbox[i] !== true ;
        }
      });

      if ( mandatoryFieldNotSelected.length > 0 ) {
        this.mandatoryCheckBoxNotSelected = true;
      } else {
        this.mandatoryCheckBoxNotSelected = false;
      }
    }
  }

  /**
   * Validate Form and Submit if valid.
   * Submit Type: Add(Post), Update(Put) is based on input property methodOnSubmit
   */
  submit() {

    // Check form validity
    if ( !this.group.valid || this.checkCheckBoxValid() ) {
      // Form invalid
      return;
    }
    // If its view then disable submit functionality
    if (this.viewmode) {
      return;
    }

    // for converting form group documents array to student documents array
    const student = this.group.value as Student;
    student.documents = student.documents.map((doc, i) => {
      return { name: this.documents[i].name, value: doc };
    } );

    // Based on the parent component appropiate action will be called.
    // Post for OnBoard & Put in case of Edit
    switch (this.methodOnSubmit) {
      case 'put':
        this.studentDataService.updateStudent(student).subscribe(data => {
          // Student updated in student list
          this.router.navigateByUrl(this.redirectUrl);
        });
        break;
      case 'post':
        this.studentDataService.postStudent(student).subscribe(data => {
          // Student added in student list
          this.router.navigateByUrl(this.redirectUrl);
        });
        break;
    }

  }

  // Reset form and clear values if any
  reset() {
    if (this.viewmode) {
      return;
    }
    this.group.reset();
  }




}
