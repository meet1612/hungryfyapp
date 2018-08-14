import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Customer } from './login/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login_url:string="http://localhost:3000/customer/";
  private signup_url:string="http://localhost:3000/signup/";

  constructor(private _http:HttpClient) { }
  CustomerLogin(item:Customer){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.login_url,body,{headers:head1});
  }
  CustomerSignup(item:Customer){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(body);
    return this._http.post(this.signup_url,body,{headers:head1});
  }
  getCustomerById(id:string){
    return this._http.get(this.login_url+id);
  }
}
