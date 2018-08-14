import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  flag:boolean=false;
  Email_Id:string;
  Mobile:number;
  Password:string;
  constructor(private _data:LoginService,private _send:Router) { }

  ngOnInit() {
  }
  onOkay(){
    this._data.getCustomerById(this.Email_Id).subscribe(
      (data:any[])=>{
        if(data.length>0){
          if(this.Mobile==data[0].Mobile){
            this.flag=true;
            this.Password=data[0].Password;
          }
          else{
            alert("Mobile no is invalid");
          }
        }
        else{
          alert("Inavalid email");
        }
      }
    );
  }
  onBack(){
    this._send.navigate(['']);
  }

}
