import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component'
import { MainviewComponent } from './mainview/mainview.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*{ path: '', component: WelcomeviewComponent },*/
  { path: 'home', component: WelcomeviewComponent },
  /*{ path: 'login', redirectTo: '/main', component: LoginComponent },*/
  { path: 'login', component: MainviewComponent},
  { path: 'main', component: MainviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
