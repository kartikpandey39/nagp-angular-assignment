import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, StudentFormComponent, ErrorpageComponent, ConfirmationDialogComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ConfirmationDialogComponent],
  exports: [HeaderComponent, StudentFormComponent, ErrorpageComponent, FooterComponent]
})
export class SharedModule { }
