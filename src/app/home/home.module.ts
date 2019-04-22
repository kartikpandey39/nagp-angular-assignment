import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentOnboardComponent } from './student-onboard/student-onboard.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StudentFilterPipe } from './student-filter.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { SharedModule } from '../shared/shared.module';
import { StudentViewComponent } from './student-list/student-view/student-view.component';
import { StudentEditComponent } from './student-list/student-edit/student-edit.component';


@NgModule({
  declarations: [
      StudentListComponent, StudentOnboardComponent, HomeComponent,
      StudentFilterPipe, StudentViewComponent, StudentEditComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [StudentListComponent, StudentOnboardComponent, HomeComponent]
})
export class HomeModule { }
