import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user2=new LoginModel('sree','234r5t6y7');
  loginForm:FormGroup;
  hide=true;
  constructor(private serve : LoginService,private formBuilder : FormBuilder) { }
  
  ngOnInit() {
    this.loginForm=this.formBuilder.group(
      {
        'email':[this.user2.email,[
          Validators.required,
          Validators.email
        ]],
        'p':[this.user2.p,[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
         
        ]],
      }
    )
  }
  
onLoginSubmit(){
  this.serve.insert(this.user2)
  .subscribe(
    data => console.log('Sucess!',data),
    error => console.log('Error!',error)
  
  )
  
    
  alert(this.user2.email + ' '+' '+this.user2.p);

  
}
  }

