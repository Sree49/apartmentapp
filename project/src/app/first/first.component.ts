
import { Component, OnInit, Input } from '@angular/core';

import { FirstService } from '../first.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  valid=false;
  c=0;
  mem:Contact[];
  constructor(private first1: FirstService){}
  ngOnInit() {
  
  return this.first1.first2()
    .subscribe(
      data=> {
      this.mem = data;
    }
    );
  }
sub(){
  this.valid=!this.valid;
}
  
}
