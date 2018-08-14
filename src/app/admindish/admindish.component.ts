import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../home/dish';

@Component({
  selector: 'app-admindish',
  templateUrl: './admindish.component.html',
  styleUrls: ['./admindish.component.css']
})
export class AdmindishComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  delArr: Dish[] = [];
  disharr:Dish[]=[];
  dish_name:string;
  dish_img:string;
  dish_price:string;
  fk_cusines_id:number;
 dish_id:number;
  i:number=0;
  flag:boolean=false;
  selectFile:File=null;

  constructor(private _dish:DishService,private _send:Router) { }

displayedColumns: string[] = ["Action","id", "name","price","img","cate","symbol"];
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._dish.getAllDish().subscribe((data: Dish[]) => {
      this.disharr = data;
      this.dataSource.data = this.disharr;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    if(this.disharr.find(x => x.dish_name == this.dish_name)) {
      alert("Already Exits");
    }
    else{
    const fd=new FormData;
    //fd.append('dish_id',this.dish_id.toString());
    fd.append('dish_name',this.dish_name);
    fd.append('dish_price',this.dish_price.toString());
    fd.append('dish_img',this.selectFile);
    fd.append('fk_cusines_id',this.fk_cusines_id.toString());
    this._dish.addDish(fd).subscribe(
      (data:any)=>{
        this.disharr.push(new Dish(data.insertId,this.dish_name,this.dish_price,this.dish_img,this.fk_cusines_id));
        alert("added");
        // console.log(data.insertId);
        // console.log(this.dish_name);
        // console.log(this.dish_price);
        // console.log(this.dish_img);
        // console.log(this.fk_cusines_id);
        this.dataSource.data=this.disharr;
      }
    );
  }
  }
  checkChange(item: Dish) {
    if (this.delArr.find(x => x == item)) {
      this.delArr.splice(this.delArr.indexOf(item), 1);
    } else {
      this.delArr.push(item);
    }
  }

   deleteAll(){
    this._dish.deleteAllDish(this.delArr).subscribe(

    (data:any)=>{
    for(this.i=0;this.i<this.delArr.length;this.i++)
    {
    if(this.disharr.find(x=>x==this.delArr[this.i]))
    {
    this.disharr.splice(this.disharr.indexOf(this.delArr[this.i]),1);
    }
    }
    this.dataSource.data=this.disharr;
    }
  )
  };
  onEdit(item:Dish){
    this._send.navigate(["/admindishedit", item.dish_id]);
  }
  onabc()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onChange(value){
    this.selectFile=<File>value.target.files[0];
  }
}
