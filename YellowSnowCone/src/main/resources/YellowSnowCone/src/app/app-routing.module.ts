import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { MessagesComponent } from './messages/messages.component';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';
import { MessagesthreadComponent } from './messagesthread/messagesthread.component';
import { AuthGuard } from './auth.guard';
import { MypostViewComponent } from './mypost-view/mypost-view.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { FriendslistComponent } from './friendslist/friendslist.component';

const routes: Routes = [
  { path: "", redirectTo: "/welcomeview", pathMatch: "full" },
  { path: "welcomeview", component: WelcomeviewComponent },
  { path: "mypost", component: MypostViewComponent },
  { path: "messages", component: MessagesComponent },
  // { path: "mainview", component: MainviewComponent, canActivate: [AuthGuard] },
  { path: "mainview", component: MainviewComponent },
  { path: 'messagesthread', component: MessagesthreadComponent },
  { path: 'searchuser', component: SearchuserComponent},
  { path: 'newmessage', component: NewmessageComponent},
  { path: 'friendslist', component: FriendslistComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes/*, {onSameUrlNavigation: "reload"}*/)]
})
export class AppRoutingModule { }
