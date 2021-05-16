import { Component, OnInit } from '@angular/core';
import { User , role} from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-accountssettings',
  templateUrl: './accountssettings.component.html',
  styleUrls: ['./accountssettings.component.css']
})
export class AccountssettingsComponent implements OnInit {

  users: any;
  user:User=new User("","","","","",role.Parent);
  message:any;

  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service: UserServiceService){
    this.ScriptElement = document.createElement('script'); 
    this.ScriptElement.src = "../../../assets/js/main.js" ;
    document.body.appendChild(this.ScriptElement);

    this.ScriptElement1 = document.createElement('script'); 
    this.ScriptElement1.src = "../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ;
    document.body.appendChild(this.ScriptElement1);

    this.ScriptElement2 = document.createElement('script'); 
    this.ScriptElement2.src = "../../../assets/vendor/php-email-form/validate.js" ;
    document.body.appendChild(this.ScriptElement2);

    this.ScriptElement3 = document.createElement('script'); 
    this.ScriptElement3.src = "../../../assets/vendor/swiper/swiper-bundle.min.js" ;
    document.body.appendChild(this.ScriptElement3);
  }

  ngOnInit(): void {
    let resp = this.service.getAllUser();
    resp.subscribe((data)=>{this.users=data})
  }
  public deleteUserNow(id :number){
    
    let resp =this.service.deleteuser(id);
    resp.subscribe((data)=>this.users=data);
  
}
}
