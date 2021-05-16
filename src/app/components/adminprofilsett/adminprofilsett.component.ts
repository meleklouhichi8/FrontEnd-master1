import { Component, OnInit } from '@angular/core';
import { User , role} from 'src/app/Models/user';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {ActivatedRoute,  Router} from '@angular/router';
@Component({
  selector: 'app-adminprofilsett',
  templateUrl: './adminprofilsett.component.html',
  styleUrls: ['./adminprofilsett.component.css']
})
export class AdminprofilsettComponent implements OnInit {
  id: any;
  user: any;
  message:any;



  ScriptElement: HTMLScriptElement;
  ScriptElement1: HTMLScriptElement;
  ScriptElement2: HTMLScriptElement;
  ScriptElement3: HTMLScriptElement;
  constructor(private service: UserServiceService ,private route: ActivatedRoute,  private router: Router ){
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
    this.id = this.route.snapshot.params.id;
    
    this.service.getUserById(this.id).subscribe(data => {
      this.user = data; }, error => console.log(error));
    
  }
  
  public updateAdminNow(){
    let resp= this.service.updateuser(this.user);
    resp.subscribe((data)=>this.message=data);
  }
}
