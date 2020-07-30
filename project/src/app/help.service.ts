import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Comment} from '../app/comment';
@Injectable({
  providedIn: 'root'
})
export class HelpService {

private url='http://localhost:3000/help';
  constructor(private _http: HttpClient){

  }
  
  
help1(): Observable<Comment[]>
  {
  
 return  this._http.get<Comment[]>(this.url,{

 })
// .catch((error:any)=>Observable.throw(error.json().error));
  }
}