import { Injectable } from '@angular/core';
import {NotFoundError} from '../CustomErrors/notFoundError';
import {AppError} from '../CustomErrors/appError';
import {HttpClient} from '@angular/common/http';
// import {observable, Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url = 'http://localhost:8080/user';
  constructor(private  httpCLient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.httpCLient.get(this.url, {responseType: 'json'})
      .pipe( catchError((err => this.handleError(err))));
  }

  getUserById(id: number): Observable<any>{
    return this.httpCLient.get(`${this.url}/${id}`)
      .pipe( catchError( (err => this.handleError(err))));
  }

  postResouce(resource: any): Observable<any>{
    return this.httpCLient.post(this.url, resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  postEdu(resource: any, id: any): Observable<any>{
    return this.httpCLient.post(`${this.url}/education/${id}`, resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  postSkill(resource: any, id: any): Observable<any>{
    return this.httpCLient.post(`${this.url}/Skills/${id}` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  deleteUser(id: any): Observable<any>{
    return this.httpCLient.delete(`${this.url}/${id}`).pipe(
      catchError( (err => this.handleError(err)))
    );
  }


  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(err));
  }
}
