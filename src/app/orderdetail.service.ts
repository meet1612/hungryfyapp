import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {
  private url:string="http://localhost:3000/orderdetail/";
  constructor(private _http:HttpClient) { }
  getPastOrderdetailById(id:number){
    return this._http.get(this.url+id);
  }
}
