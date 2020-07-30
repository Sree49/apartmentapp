import { Component, OnInit, Input } from '@angular/core';
import {RegisterService} from '../register.service';
import {Contact} from '../contact';
import { EventService } from '../event.service';
import { Eventcon } from '../eventcon';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  isShow1;
today=Date.now();
mem:Eventcon[];
constructor(private first1: EventService){}
ngOnInit() {

return this.first1.first2()
  .subscribe(
    data=> {
    this.mem = data;
  }
  );

   //  this.today = Date.now();
//console.log(this.today);
  }
somemethod()
{
this.isShow1!=this.isShow1;
}
}
  
  

