import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
// import {observable, Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:8080/user';
  constructor(private  httpCLient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.httpCLient.get(this.url, {responseType: 'json'})
      .pipe( catchError((err => {throw new Error('users not found error'); })));
  }

  // tslint:disable-next-line:typedef
  getUserById(id: number){
    return this.httpCLient.get(`${this.url}/${id}`)
      .pipe( catchError( (err => {throw new Error('users not found error'); })));
  }
  // tslint:disable-next-line:typedef
  postResouce(resource: any){
    return this.httpCLient.post(this.url, resource).pipe(
      catchError( (err => {throw new Error('Error in post '); })));
  }
  // tslint:disable-next-line:typedef
  deleteResourse(id: any){
    return this.httpCLient.delete(`${this.url}/${id}`);
  }
}
