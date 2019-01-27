import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { MessagesComponent } from './messages/messages.component';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';

const routes: Routes = [

  { path: '', redirectTo: '/welcomeview', pathMatch: 'full' },
  { path: 'welcomeview', component: WelcomeviewComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'mainview', component: MainviewComponent}

]; 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }
