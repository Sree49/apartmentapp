import { Component, OnInit, Input } from '@angular/core';
import {RegisterService} from '../register.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  isShow1;
  isShow2;
  isShow3;
  isShow4;
  isShow5;
  ngOnInit() {
    
  }
  toggleDisplay1() {
    this.isShow1 = !this.isShow1;
  }
  toggleDisplay2() {
    this.isShow2 = !this.isShow2;
  }
  toggleDisplay3() {
    this.isShow3 = !this.isShow3;
  }
  toggleDisplay4() {
    this.isShow4 = !this.isShow4;
  }
  toggleDisplay5() {
    this.isShow5 = !this.isShow5;
  }
}
