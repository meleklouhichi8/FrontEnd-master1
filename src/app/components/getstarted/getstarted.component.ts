import { Component, OnInit } from '@angular/core';
import { User , role} from 'src/app/Models/user';
import { ResgisterService } from 'src/app/Services/resgister.service';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {


  user:User=new User("","","","","",role.Parent);
  message :any ;  

  
  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service:ResgisterService){
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
  }

   public ClientRegistration(){
    let response = this.service.RegisterClient(this.user); 
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    console.log(this.user.email);
    console.log(this.user.userName);
    console.log(this.user.password); 
    response.subscribe((data)=>this.message=data);
  }


}
