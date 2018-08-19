import { Component, OnInit } from '@angular/core';
import { CusinesService } from "../cusines.service";
import { Cusine } from './cusine';
import { Dish_Cusine } from './dish_cusine';
import { DishService } from '../dish.service';
import { BillService } from '../bill.service';
import { BdetailService } from '../bdetail.service';
import { Dish } from './dish';
import { Bill } from './bill';
import { Bdetail } from './bdetail';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cusinearr:Cusine[]=[];
  dish_id:number[]=[];
  cus_disharr:Dish_Cusine[]=[];
  arr:Dish[]=[];
  qty:number[]=[];
  price:number[]=[];
  qtyarr:number[]=[];
  ramarkarr:string[]=[];
  billarr:Bill[]=[];
  bdetailarr:Bdetail[]=[];
  Price:number;
  id:number;
  total:number=0;
  i:number;
  x:number=0;
  a:number;
  b:number;

  id1:number;
  constructor(private _send:Router,private _bdetail:BdetailService,private _bill:BillService,private _cusine:CusinesService,private _dish:DishService) { }

  ngOnInit() {
    this._cusine.getAllCusin().subscribe(
      (data:Cusine[])=>{
        this.cusinearr=data;
        this._dish.getDishByJoin(this.cusinearr[0].cusines_name).subscribe(
          (data:any)=>{
              this.cus_disharr=data;
          }
        );
      }
    );
    for(this.i=1;this.i<=10;this.i++){
      this.qtyarr.push(this.i);
  }
  }
  onItem(item){

    if(this.arr.find(x=>x.dish_id==item.dish_id)){
      alert("Already Exits");
    }
    else{
    console.log(item);
    this.arr.push(item);
    this.qty.push(1);
    this.price.push(item.dish_price);
    this.ramarkarr.push(" ");
    this.dish_id.push(item.dish_id);
    this.total=0
    for(this.i=0;this.i<this.price.length;this.i++){
      this.total+=this.price[this.i];
    }
    }
  }
  onselectChange(item,i){
    console.log(i);
      this.price[i]=this.qty[i]*item.dish_price;

      this.total=0;
      for(this.i=0;this.i<this.price.length;this.i++){
        this.total+=this.price[this.i];
      }
  }
  onDel(item,i){
    this.total=this.total-this.price[i];
    this.arr.splice(this.arr.indexOf(item),1);
    this.qty.splice(i,1);
    this.price.splice(i,1);
    this.ramarkarr.splice(i,1);
    this.dish_id.splice(i,1);
    this.total=0
    for(this.i=0;this.i<this.price.length;this.i++){
      this.total+=this.price[this.i];
    }

  }
  onclick(item){
    this._dish.getDishByJoin(item).subscribe(
      (data:Dish_Cusine[])=>{
        this.cus_disharr=data;
      }
    );
  }
  onAddToBill(){

          this._bill.addBill(new Bill(this.total,localStorage.getItem('email'))).subscribe(
            (data:any)=>{
              console.log(data);
              console.log(this.ramarkarr);
              for(this.i=0;this.i<this.arr.length;this.i++){
                  this.bdetailarr.push(new Bdetail(this.dish_id[this.i],this.qty[this.i],this.price[this.i],this.ramarkarr[this.i],data.insertId))
              }
              this._bdetail.addBdetail(this.bdetailarr).subscribe(
                (data:any)=>{
                    alert("inserted successfully");
                    this.arr.splice(0,this.arr.length);
                    this.price.splice(0,this.price.length);
                    this.ramarkarr.splice(0,this.ramarkarr.length);
                    this.total=0;
                }
              );
        });
      }
onPastOrder(){
  this._send.navigate(['/order']);
}
onlogout(){
  this._send.navigate(['']);
}
  }
