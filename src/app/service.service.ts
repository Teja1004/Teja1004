import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
   
  getTasksData():any{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

   getdata():any{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
   }
}
