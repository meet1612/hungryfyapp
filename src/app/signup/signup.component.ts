import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Customer } from '../login/customer';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Email_Id:string;
  Password:string;
  Username:string;
  rbtn1:string="male";
  Age:number;
  Mobile:number;
  City:string;
  Address:string;
  Pincode:number;
  constructor(private _send:Router,private _data:LoginService) { }

  ngOnInit() {
  }
  onSignup(){
    this._data.CustomerSignup(new Customer(this.Email_Id,this.Password,this.Username,this.rbtn1,this.Age,this.Mobile,this.Address,this.City,this.Pincode)).subscribe(
      (data:any)=>{
        console.log(this.Email_Id,this.Password,this.Username,this.rbtn1,this.Age,this.Mobile,this.Address,this.City,this.Pincode);
        alert("successfully added");
        this._send.navigate(['']);
        console.log(data);
      }
    );
  }
  onchange(){
    console.log(this.rbtn1);
  }
  onBack(){
    this._send.navigate(['']);
  }
}
