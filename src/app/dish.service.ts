import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Dish } from './home/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private url:string="http://localhost:3000/dish/";
  private url1:string="http://localhost:3000/dish1/";
  constructor(private _http:HttpClient) { }
  getDishByJoin(name:string){
    return this._http.get(this.url+name);
  }
  //ahi thi badha admin mate..
  getAllDish(){
    return this._http.get(this.url);
  }
  addDish(item:FormData){
    return this._http.post(this.url1,item);
  }
  deleteAllDish(item:Dish[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  updateDish(item:Dish){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url1+item.dish_id,body,{headers:head1});
  }
  getDishById(id){
    return this._http.get(this.url1+id);
  }
}
