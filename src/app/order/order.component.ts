import { Component, OnInit,ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Bill } from '../home/bill';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Cusine } from '../home/cusine';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  user:string;
  orderarr:Bill[]=[];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _data:OrderService,private _send:Router) { }

  displayedColumns: string[] = ["date","amount","symbol"];
  ngOnInit() {
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      this.user=localStorage.getItem('email');
      this._data.getPastOrderById(this.user).subscribe(
        (data:any)=>{
          console.log(data);
            this.dataSource.data=data;
        }
      );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDetail(item){
    console.log(item.bill_id);
    this._send.navigate(['/orderdetail',item.bill_id]);
  }
  onHome(){
    this._send.navigate(['/home']);
  }
  onlogout(){
    this._send.navigate(['']);
  }
}
