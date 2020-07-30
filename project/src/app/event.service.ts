import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Eventcon} from '../app/eventcon';
@Injectable({
  providedIn: 'root'
})
export class EventService {

private url='http://localhost:3000/event';
  constructor(private _http: HttpClient){

  }
  
  
first2(): Observable<Eventcon[]>
  {
  
 return  this._http.get<Eventcon[]>(this.url,{
   

 })
// .catch((error:any)=>Observable.throw(error.json().error));
  }
}