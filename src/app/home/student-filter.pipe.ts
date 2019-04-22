import { Pipe, PipeTransform } from '@angular/core';
import { Student, Category } from './student';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  /* Takes students array and return students based on category and search query passed into */
  transform(students: Student[] , category, searchQuery: string): Student[] {


    // removing trailing and end white spaces and lower case it to be more robust
    // Filtering out student list based on category if specified
    const categorisedStudent = ( !category || category === '') ? students : students.filter(student => student.category === category );

    // Using categorized list and filter it based on query string
    return ( !searchQuery || searchQuery === '') ? categorisedStudent :
              categorisedStudent.filter( cs => cs.name.toLowerCase().includes(searchQuery.trim().toLowerCase()));

  }

}
