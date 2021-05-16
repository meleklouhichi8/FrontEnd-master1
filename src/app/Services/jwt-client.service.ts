import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private  http:HttpClient) { }
/*
  public generateToken(loginRequest : LoginRequest){
    return this.http.post("http://localhost:3000/home/Login",loginRequest,{responseType: 'text' as 'json'});
  }
  public hello(token : string){
    let tokenStr= "bearer "+token ;
    const headers=new HttpHeaders().set("Autorization",tokenStr);
    return this.http.get("http://localhost:3000/user/hello",{headers,responseType: 'text' as 'json'});
  }*/
}
