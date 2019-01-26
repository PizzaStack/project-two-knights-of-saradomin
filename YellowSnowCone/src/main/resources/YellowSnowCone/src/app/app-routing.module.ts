import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component'

const routes: Routes = [
  { path: '', component: WelcomeviewComponent },
  { path: 'home', component: WelcomeviewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
