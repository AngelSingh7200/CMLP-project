import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
@Injectable({
  providedIn: 'root'
})
export class SendersService {
  uri = 'http://localhost:8000/senders';  
  constructor(private http: HttpClient) { }  
  addSender(from, to, subject, Eventtitle,) {  
    const obj1 = {  
      from,  
      to,  
      subject,
      Eventtitle,
    };  
    console.log(obj1);  
    this.http.post(`${this.uri}/add`, obj1)  
        .subscribe(res => console.log('Done'));  
  } 
}
