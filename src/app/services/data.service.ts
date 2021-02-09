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

  url = 'http://localhost:8080/api';
  constructor(private  httpCLient: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.httpCLient.get(`${this.url}/user/all`, {responseType: 'json'})
      .pipe( catchError((err => this.handleError(err))));
  }

  getUserById(id: number): Observable<any>{
    return this.httpCLient.get(`${this.url}/user/${id}`)
      .pipe( catchError( (err => this.handleError(err))));
  }



  // posting data

  postResouce(resource: any): Observable<any>{
    return this.httpCLient.post(`${this.url}/user`, resource).pipe(
      catchError( (err => this.handleError(err))));
  }



  postSkill(resource: any, id: any): Observable<any>{
      return this.httpCLient.post(`${this.url}/user/skill/${id}` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }


  // updatations

  updateEdu(uid: any, eduid: any , resource: any): Observable<any> {
    // console.log("In DataService");
    // console.log(uid, eduid, resource);
    return this.httpCLient.put(`${this.url}/user/${uid}/education/${eduid}` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }


  // deletions
  deleteUser(id: any): Observable<any>{
    return this.httpCLient.delete(`${this.url}/user/${id}`).pipe(
      catchError( (err => this.handleError(err)))
    );
  }

  deleteEdu(id: any): Observable<any> {
    return this.httpCLient.delete(`${this.url}/education/${id}`).pipe(
      catchError( (err => this.handleError(err)))
    );
  }

  deleteSkill(id: any): Observable<any>{
    return this.httpCLient.delete(`${this.url}/skill/${id}`).pipe(
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
