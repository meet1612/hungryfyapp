import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../home/dish';

@Component({
  selector: 'app-admindishedit',
  templateUrl: './admindishedit.component.html',
  styleUrls: ['./admindishedit.component.css']
})
export class AdmindisheditComponent implements OnInit {
  id;
  str1:number;
  str2:string;
  str3:string;
  str4:number;
  img:string;
  selectFile:File=null;

  constructor(private _data:DishService,private _acroute:ActivatedRoute,private _send:Router) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['id'];
    this._data.getDishById(this.id).subscribe(
      (data:Dish[])=>{
        this.str1=data[0].dish_id;
        this.str2=data[0].dish_name;
        this.str3=data[0].dish_price;
        this.img=data[0].dish_img;
        this.str4=data[0].fk_cusines_id;
      }
    );
  }
  onSave(){
    this._data.updateDish(new Dish(this.str1,this.str2,this.str3,this.img,this.str4)).subscribe(
      (data:any)=>{
      this._send.navigate(['/admindish']);
      }
    );
  }
  onChange(value){
    this.selectFile=<File>value.target.files[0];
  }
}
