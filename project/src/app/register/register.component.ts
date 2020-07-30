import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../models/register.model';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Contact}from '../contact';
import {RegisterService} from '../register.service';
import {HttpClient} from '@angular/common/http';
import { error } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user1=new RegisterModel('sree','234r5t6y7','dfghjm','frgtfhj','dfghj');
registerForm:FormGroup;
hide=true;
  
  constructor(private service:RegisterService,private formBuilder :FormBuilder) { }
  
  ngOnInit() {
    this.registerForm=this.formBuilder.group(
      {
        'user':[this.user1.user,[
          Validators.required
        ]],
        'mob':[this.user1.mob,[
          Validators.required,
          Validators.minLength(10)
        ]],
        'email':[this.user1.email,[
          Validators.required,
          Validators.email
        ]],
        'pass':[this.user1.pass,[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
         
        ]],
        'passw':[this.user1.passw,[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]],
      }
    )
  }
    onRegisterSubmit(){
this.service.enroll(this.user1)
.subscribe(
  data => console.log('Sucess!',data),
  error => console.log('Error!',error)

)
  
  alert(this.user1.user + ' '+this.user1.email+' '+this.user1.pass);

  
}
}
