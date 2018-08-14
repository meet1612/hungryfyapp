import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Customer } from './customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email_Id:string;
  Password:string;
  constructor(private _send:Router,private _data:LoginService) { }

  ngOnInit() {
  }
  onLogin(){
   if(this.Email_Id=="admin@gmail.com" && this.Password=="admin"){
      this._send.navigate(['/admin']);
   }
    else{
    this._data.CustomerLogin(new Customer(this.Email_Id,this.Password)).subscribe(
      (data:Customer[])=>{
          if(data.length>0){
            this._send.navigate(['/home']);
            localStorage.setItem('email',data[0].Email_Id);
            //localStorage.setItem('username',data[0].Username);
          }
          else{
            alert("Id and Password doesn't match");
          }
      }
    );
  }
}
onSignup(){
  this._send.navigate(['/signup']);
}
onForget(){
  this._send.navigate(['/forgetpass'])
}
}
