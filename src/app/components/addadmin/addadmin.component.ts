import { Component, OnInit } from '@angular/core';
import { User , role} from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  users: any;
  user:User=new User("","","","","",role.Admin);
  message:any;

 
  constructor(private service: UserServiceService  ) { }

  ngOnInit(): void {
 
  }

  public addAdminNow(){
    let resp= this.service.addAdmin(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
