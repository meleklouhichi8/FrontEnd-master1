import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { User } from '../Models/user';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOption={
    headers:new HttpHeaders({"Content-Type":"application/json",}),
  }

  constructor(private http:HttpClient , private token: TokenStorageService) { }
  public addAdmin(user:User){
    return this.http.post("http://localhost:3000/user/registerAdmin",user,{responseType:'text' as 'json'})
      }

      public getAllUser()  {
        return this.http.get("http://localhost:3000/user/all")
      }

      public modifyUser(user:User){
        return this.http.put("http://localhost:3000/user/modifyuser",user,{responseType:'text' as 'json'})
      }

      public deleteuser(id : number ){
        return this.http.delete("http://localhost:3000/user/Delete/"+id);
      }

      public updateuser(user : User){
       
       return this.http.put("http://localhost:3000/user/modifyuser",user,{responseType:'text' as 'json'})
      }

      public getUserById( id:number)
      {
        return this.http.get("http://localhost:3000/user/getUserById/"+id)
      }
    
    
}
