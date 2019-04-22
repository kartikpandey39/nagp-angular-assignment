import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCheckboxModule, MatInputModule, MatButtonModule, MatSelectModule,
  MatChipsModule, MatCardModule, MatListModule, MatTabsModule, MatToolbarModule,
  MatIconModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule, MatInputModule, MatButtonModule, MatSelectModule,
    MatChipsModule, MatCardModule, MatListModule, MatTabsModule, MatToolbarModule, MatIconModule
    , MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatDialogModule
  ],
  exports: [MatCheckboxModule, MatInputModule, MatButtonModule, MatSelectModule,
    MatChipsModule, MatCardModule, MatListModule, MatTabsModule, MatToolbarModule, MatIconModule,
    MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatDialogModule
  ]
})
export class MaterialDesignModule { }
