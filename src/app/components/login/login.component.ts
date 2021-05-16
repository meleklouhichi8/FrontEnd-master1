import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { JwtClientService } from 'src/app/Services/jwt-client.service';
//import { LoginRequest } from 'src/app/Models/loginRequest';
import { AuthService } from 'src/app/Services/auth.service';
import { Router} from '@angular/router';
import { User , role} from 'src/app/Models/user';
import {LoginRequest} from 'src/app/Models/loginRequest'
import { TokenStorageService } from 'src/app/Services/token-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 /* err:number=0;
  user:User=new User("","","","","",role.Admin);
  loginrequest : any ;*/
//loginrequest : LoginRequest = new LoginRequest("","");
 // errorMessage:any ;
  //name : any ;
 // loginForm : any ;
 // authRequest : any;
 // response :any ;
 form: any = {
  username: null,
  password: null
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
//roles: string[] = [];
roles: role=role.Admin ;
firstName=''

  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService){
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
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
    }
    //this.getAccessToken(this.authRequest);
  }
  /*public getAccessToken(authRequest : LoginRequest){
    let resp=this.service.generateToken(authRequest);
    //resp.subscribe(data=>console.log("Token : "+data));
    resp.subscribe(data=>this.accessApi(data));
  }
  public accessApi(token : any){
    let resp=this.service.hello(token);
    resp.subscribe(data=>this.response=data);
  }*/

  /*
onLoggedin()
{
  this.service.login(this.loginrequest).subscribe((data)=>{
    let jwToken = data.headers.get('Bearer');
    this.service.saveToken(jwToken);
    this.router.navigate(['/']);
  },(err)=>{this.err = 1 ;
  });
}*/

onSubmit(): void {
  const { username, password } = this.form;

  this.authService.login(username, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

reloadPage(): void {
  window.location.reload();
}
}