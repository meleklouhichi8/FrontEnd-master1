import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginRequest } from '../Models/loginRequest';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { UserInfoService } from 'src/app/Services/user-info.service';
import { ApiRequestService } from 'src/app/Services/api-request.service';

export interface LoginRequestParam{
  username:string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public landingPage:string = "/home/dashboard/order";
  constructor(private http:HttpClient ,  private router:Router,
    private userInfoService: UserInfoService,
    private apiRequest: ApiRequestService) { }
/*
  public loginUser(loginRequest : LoginRequest ){
    const headers=new HttpHeaders({AUthorization :'Basic' + btoa(loginRequest.username+" : " + loginRequest.password)});
    return this.http.post("http://localhost:3000/home/Login",{headers,responseType:'json'}); 
  }*/
  

}
