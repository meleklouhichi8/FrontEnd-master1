import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { LoginComponent } from './components/login/login.component';
import { ClientareaComponent } from './components/clientarea/clientarea.component';
import { AdminareaComponent } from './components/adminarea/adminarea.component';

import { MessagesComponent } from './components/messages/messages.component';
import { ForumComponent } from './components/forum/forum.component';
import { AccountsettComponent } from './components/accountsett/accountsett.component';
import { AccountssettingsComponent } from './components/accountssettings/accountssettings.component';
import { AdminmessagesComponent } from './components/adminmessages/adminmessages.component';
import { AdminprofilsettComponent } from './components/adminprofilsett/adminprofilsett.component';
import { AdminforumComponent } from './components/adminforum/adminforum.component';
import { LoginService } from './Services/login.service';
import { ResgisterService } from './Services/resgister.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KinderGartenComponent } from './components/kinder-garten/kinder-garten.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GetstartedComponent,
    LoginComponent,
    ClientareaComponent,
    AdminareaComponent,
    MessagesComponent,
    ForumComponent,
    AccountsettComponent,
    AccountssettingsComponent,
    AdminmessagesComponent,
    AdminprofilsettComponent,
    AdminforumComponent,
    KinderGartenComponent,
    AddadminComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ResgisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
