import { Injectable } from '@angular/core';


import { Contact} from './contact';
import {HttpClient} from '@angular/common/http'; 
import { RegisterModel } from './models/register.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url='http://localhost:3000/enroll';
  constructor(private _http: HttpClient){

  }
  enroll(user : RegisterModel){
    return this._http.post<any>(this.url,user);
}
      
 
}