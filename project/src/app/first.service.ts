import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Contact} from '../app/contact';
@Injectable({
  providedIn: 'root'
})
export class FirstService {

private url='http://localhost:3000/first';
  constructor(private _http: HttpClient){

  }
  
  
first2(): Observable<Contact[]>
  {
  
 return  this._http.get<Contact[]>(this.url,{

 })
// .catch((error:any)=>Observable.throw(error.json().error));
  }
}