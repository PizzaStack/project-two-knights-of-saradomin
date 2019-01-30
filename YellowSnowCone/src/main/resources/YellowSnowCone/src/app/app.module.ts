import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { MessagesthreadComponent } from './messagesthread/messagesthread.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { RepostComponent } from './repost/repost.component';

import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { MypostViewComponent } from './mypost-view/mypost-view.component';
import { UserpostComponent } from './userpost/userpost.component';

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
    MypostViewComponent,
    UserpostComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, MessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
