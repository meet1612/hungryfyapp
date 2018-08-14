import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cusine } from './home/cusine';

@Injectable({
  providedIn: 'root'
})
export class CusinesService {
  private url:string="http://localhost:3000/cusin/";
  private url1:string="http://localhost:3000/cusin1/";

  constructor(private _http:HttpClient) { }
  getAllCusin(){
    return this._http.get(this.url);
  }
  // ahi thi badha admin mate...
  addCusine(item:Cusine){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteAllCusine(item:Cusine[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url1,body,{headers:head1});
  }
  updateCusine(item:Cusine){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url1+item.cusines_id,body,{headers:head1});
  }
  getCusineById(id){
    return this._http.get(this.url+id);
  }
}
