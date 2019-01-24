import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainpagejumbotronComponent } from './mainpagejumbotron/mainpagejumbotron.component';
import { RegisterComponent } from './register/register.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { CreatepostComponent } from './createpost/createpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainpagejumbotronComponent,
    RegisterComponent,
    SidemenuComponent,
    ProfilepictureComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
