
import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';


import { ListService } from '../list.service';
import { ListModel } from '../models/list.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  newPost=new ListModel('nocontent');
  helpForm:FormGroup;
  constructor(private service : ListService,private formBuilder :FormBuilder) { }
  
  ngOnInit() {
    this.helpForm=this.formBuilder.group(
      {
        'text1':[this.newPost.text1,[
          Validators.required
        ]]
      })}
      



  onAddPost()
  {
    console.log(this.newPost);
      this.service.list1(this.newPost)
      .subscribe(
        data => console.log('Sucess!',data),
        error => console.log('Error!',error)
      
      )
      console.log(this.newPost);

  }

  
  

  
}
