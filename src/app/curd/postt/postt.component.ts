import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-postt',
  templateUrl: './postt.component.html',
  styleUrls: ['./postt.component.css']
})
export class PosttComponent {
  
    data:any;
  constructor(private service:ServiceService){
    this.service.getdata().subscribe((res:any)=>{this.data=res});
  }
      
}
