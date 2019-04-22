import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

import { MaterialDesignModule } from '../shared/material-design/material-design.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
  ],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class LoginModule { }
