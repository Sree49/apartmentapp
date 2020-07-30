import { Injectable } from '@angular/core';

import{ListModel} from './models/list.model';
import { Contact} from './contact';
import {HttpClient} from '@angular/common/http'; 
import { LoginService } from './login.service';
import { LoginModel } from './models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url='http://localhost:3000/list1';
  constructor(private _http: HttpClient){

  }
  list1(newPost : ListModel){
    console.log(newPost);
    return this._http.post<any>(this.url,newPost);
    
}    
 
}