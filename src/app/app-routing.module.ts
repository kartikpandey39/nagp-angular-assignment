import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { homeRoutes } from './home/home-routing.module';
import { AuthorizedGuard } from './login/authorized.guard';
import { UnAuthorizedGuard } from './home/unauthorized.guard';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthorizedGuard]},
  {path: 'home', component: HomeComponent, children: [...homeRoutes], canActivate: [UnAuthorizedGuard]},
  {path: '**', component: ErrorpageComponent} // For handling errors
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
