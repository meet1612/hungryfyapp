import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url:string="http://localhost:3000/order/";
  constructor(private _http:HttpClient) { }
  getPastOrderById(id:string){
    return this._http.get(this.url+id);
  }
}
