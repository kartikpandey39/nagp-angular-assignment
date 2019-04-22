import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Import for in memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataAccessService } from './core/data-access.service';

import { HomeModule } from './home/home.module';
import { AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    // For using in memory web api
    HttpClientInMemoryWebApiModule.forRoot(
      DataAccessService, { dataEncapsulation: false }
      ),
    AppRoutingModule,
    HomeModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
