import { Injectable } from '@angular/core';

import { LoginModel } from './models/login.model';

import { Contact} from './contact';
import {HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  url='http://localhost:3000/insert';
  constructor(private _http: HttpClient){

  }
  
  insert(user3 : LoginModel){
    
    return this._http.post<any>(this.url,user3);
}
      
 

 
}
