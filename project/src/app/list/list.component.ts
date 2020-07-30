
import { Component, OnInit, Input } from '@angular/core';


import { Comment } from '../comment';
import { HelpService } from '../help.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  mem1:Comment[];
  constructor(private h: HelpService){}
  ngOnInit() {
  
  return this.h.help1()
    .subscribe(
      data=> {
      this.mem1 = data;
    }
    );
  }
}
