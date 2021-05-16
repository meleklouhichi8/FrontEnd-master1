import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { User , role} from 'src/app/Models/user';
import {LoginRequest} from 'src/app/Models/loginRequest'
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:3000/home/Login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // public loggedUser : any ; // string
 // public isloggedIn : any ; //boolean
 // public roles : any ; // string[]
 // token : any ; //string 

  constructor(private http: HttpClient ,  private router:Router) { }

 /* login(loginrequest : LoginRequest){
    return this.http.post<LoginRequest>("http://localhost:3000/home/Login" , loginrequest, {observe : 'response'});
  }*/

/*  saveToken(jwt:any){
    localStorage.setItem('jwt',jwt);
    this.token = jwt ;
    this.isloggedIn = true ;
  }*/
/*
  logout(){
    this.isloggedIn = false ;
    this.loggedUser = undefined ;
    this.roles = undefined ;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIN',String(this.isloggedIn));
    this.router.navigate(['/AdminArea']);
  }*/
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API , {
      username,
      password
    }, httpOptions);
  }

  
}