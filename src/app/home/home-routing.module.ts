import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent} from './student-list/student-list.component';
import { StudentOnboardComponent} from './student-onboard/student-onboard.component';
import { StudentViewComponent } from './student-list/student-view/student-view.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';

export const homeRoutes: Routes = [
  {path: '', redirectTo: 'onboard', pathMatch: 'full'},
  {path: 'onboard', component: StudentOnboardComponent},
  {path: 'list', component: StudentListComponent},
  {path: 'view/:id', component: StudentViewComponent},
  {path: 'edit/:id', component: StudentEditComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
