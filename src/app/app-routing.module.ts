import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsettComponent } from './components/accountsett/accountsett.component';
import { AccountssettingsComponent } from './components/accountssettings/accountssettings.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AdminareaComponent } from './components/adminarea/adminarea.component';
import { AdminforumComponent } from './components/adminforum/adminforum.component';
import { AdminmessagesComponent } from './components/adminmessages/adminmessages.component';
import { AdminprofilsettComponent } from './components/adminprofilsett/adminprofilsett.component';
import { ClientareaComponent } from './components/clientarea/clientarea.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForumComponent } from './components/forum/forum.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { HomeComponent } from './components/home/home.component';
import { KinderGartenComponent } from './components/kinder-garten/kinder-garten.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'KindeGartens', component:KinderGartenComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Getstarted/Register', component:GetstartedComponent},
  {path:'Getstarted/Login', component:LoginComponent},
  {path:'Session/Connected!0/Home', component:ClientareaComponent},
  {path:'Session/Connected!0/Home/Profil/Messages', component:MessagesComponent},
  {path:'Session/Connected!0/Home/Profil/Froum', component:ForumComponent},
  {path:'Session/Connected!0/Home/Profil/AccountSettings', component:AccountsettComponent},
  {path:'AdminArea', component:AdminareaComponent},
  {path:'AdminArea/KinderGarten', component:AdminareaComponent},
  {path:'AdminArea/Profil/Messages', component:AdminmessagesComponent},
  {path:'AdminArea/Profil/Froum', component:AdminforumComponent},
  {path:'AdminArea/Profil/AccountsSettings', component:AccountssettingsComponent},
  {path:'AdminArea/Profil/AccountSettings/:id', component:AdminprofilsettComponent},
  {path:'AdminArea/addadmin', component:AddadminComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
