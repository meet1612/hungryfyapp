import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Cusine } from "../home/cusine";
import { CusinesService } from "../cusines.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-admincusine",
  templateUrl: "./admincusine.component.html",
  styleUrls: ["./admincusine.component.css"]
})
export class AdmincusineComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  cusinearr: Cusine[] = [];
  cusines_id: number;
  cusines_name: string;
  cusname: string;
  delArr: Cusine[] = [];
  i:number=0;
  constructor(
    private _cusine: CusinesService,
    private _send:Router
  ) {}

  displayedColumns: string[] = ["Action","id", "name","symbol"];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._cusine.getAllCusin().subscribe((data: Cusine[]) => {
      this.cusinearr = data;
      this.dataSource.data = this.cusinearr;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd() {
    if (this.cusinearr.find(x => x.cusines_name == this.cusname)) {
      alert("Already Exits");
    } else {
      this._cusine
        .addCusine(new Cusine(this.cusines_id, this.cusname))
        .subscribe((data: any) => {
          this.cusinearr.push(new Cusine(data.insertId, this.cusname));
          alert("added");
          this.dataSource.data = this.cusinearr;
        });
    }
  }
  checkChange(item: Cusine) {
    if (this.delArr.find(x => x == item)) {
      this.delArr.splice(this.delArr.indexOf(item), 1);
    } else {
      this.delArr.push(item);
    }
  }

  deleteAll(){
    this._cusine.deleteAllCusine(this.delArr).subscribe(

    (data:any)=>{
    for(this.i=0;this.i<this.delArr.length;this.i++)
    {
    if(this.cusinearr.find(x=>x==this.delArr[this.i]))
    {
    this.cusinearr.splice(this.cusinearr.indexOf(this.delArr[this.i]),1);
    }
    }
    this.dataSource.data=this.cusinearr;
    }
  )};
  onEdit(item:Cusine){
    this._send.navigate(["/admincusineedit", item.cusines_id]);
  }
}
