import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CURDComponent  {
  items:any[] = [];
  constructor(private getDataService:ServiceService){
     this.getDataService.getTasksData().subscribe((res:any)=>{
      console.log("items-->>",res);
      this.items = res;
    });
 
  }

}
