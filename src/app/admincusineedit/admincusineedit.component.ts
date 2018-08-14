import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CusinesService } from '../cusines.service';
import { Cusine } from '../home/cusine';

@Component({
  selector: 'app-admincusineedit',
  templateUrl: './admincusineedit.component.html',
  styleUrls: ['./admincusineedit.component.css']
})
export class AdmincusineeditComponent implements OnInit {
  id;
  str1:number;
  str2:string;
  constructor(private _data:CusinesService,private _acroute:ActivatedRoute,private _send:Router) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['id'];
    this._data.getCusineById(this.id).subscribe(
      (data:Cusine[])=>{
        this.str1=data[0].cusines_id;
        this.str2=data[0].cusines_name;
      }
    );
  }
  onSave(){
    this._data.updateCusine(new Cusine(this.str1,this.str2)).subscribe(
      (data:any)=>{
      this._send.navigate(['/admincusine']);
      }
    );
  }
  }
