import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Bill } from './home/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private url:string="http://localhost:3000/bill/";
  constructor(private _http:HttpClient) { }

  addBill(item:Bill){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
}
