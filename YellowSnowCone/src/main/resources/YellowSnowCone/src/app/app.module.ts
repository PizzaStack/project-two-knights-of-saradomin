import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainpagejumbotronComponent } from './mainpagejumbotron/mainpagejumbotron.component';
import { RegisterComponent } from './register/register.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { SnowconeComponent } from './snowcone/snowcone.component';
import { SnowconelikeComponent } from './snowconelike/snowconelike.component';
import { SnowconedislikeComponent } from './snowconedislike/snowconedislike.component';
import { PostComponent } from './post/post.component';
import { MainviewComponent } from './mainview/mainview.component';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { IconComponent } from './icon/icon.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesthreadComponent } from './messagesthread/messagesthread.component';
import { RepostComponent } from './repost/repost.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { MypostViewComponent } from './mypost-view/mypost-view.component';
import { UserpostComponent } from './userpost/userpost.component';
import { RegisteredComponent } from './registered/registered.component';

import { MessageService } from './message.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainpagejumbotronComponent,
    RegisterComponent,
    SidemenuComponent,
    ProfilepictureComponent,
    CreatepostComponent,
    SnowconeComponent,
    SnowconelikeComponent,
    SnowconedislikeComponent,
    PostComponent,
    MainviewComponent,
    WelcomeviewComponent,
    UserListComponent,
    MessagesComponent,
    MessagesthreadComponent,
    IconComponent,
    UpdateprofileComponent,
    RepostComponent,
    SearchuserComponent,
    MypostViewComponent,
    UserpostComponent,
    RegisteredComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [UserService, MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
