import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { EventsService } from '../events.service';
import { SendersService } from '../senders.service';

import Sender from '../Sender'; 
@Component({
  selector: 'app-mail-edit',
  templateUrl: './mail-edit.component.html',
  styleUrls: ['./mail-edit.component.css']
})
export class MailEditComponent implements OnInit {
  event: any = {}; 
  events: Event[]; 
  constructor(private route: ActivatedRoute, private router: Router, private ps: EventsService,private ss: SendersService) { }

  addSender (from, to, subject, text)
  {
    
      this.ss.addSender(from, to, subject,text );  
      alert(text)
  
  }
  ngOnInit() {
    this.route.params.subscribe(params => {  
      this.ps.editEvent(params['id']).subscribe(res => {  
        this.event = res;  
    });  
  });  
  }

}
