import { Component, OnInit,ViewChild} from '@angular/core';
import { OrderdetailService } from '../orderdetail.service';
import { ActivatedRoute,Router } from '@angular/router';
import { OrderDetail } from './orderdetail_class';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  id:number;
  arr:OrderDetail[]=[];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _send:Router,private _receive:ActivatedRoute,private _data:OrderdetailService) { }
  displayedColumns: string[] = ["Dish_name","price","qty","total"];
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    this.id=this._receive.snapshot.params['id'];
    console.log(this.id);
    this._data.getPastOrderdetailById(this.id).subscribe(
      (data:OrderDetail[])=>{
        console.log(data);
        this.arr=data;
        this.dataSource.data=data;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onHome(){
    this._send.navigate(['/home']);
  }
  onlogout(){
    this._send.navigate(['']);
  }
  onOrders(){
    this._send.navigate(['/order']);
  }
}
