import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {NotFoundError} from '../CustomErrors/notFoundError';
import {AppError} from '../CustomErrors/appError';

@Injectable({
  providedIn: 'root'
})
export class EduServiceService {

  const url = environment.backendapi;

  constructor(private  httpCLient: HttpClient) { }


  getAllEdu(){
    this.httpCLient.get(`${this.url}/educations`).pipe( catchError( (err => this.handleError(err))));
  }

  getEdu(id: any){
    this.httpCLient.get(`${this.url}/education/${id}`).pipe( catchError( (err => this.handleError(err))));
  }

  postEdu(resource: any, id: any): Observable<any>{
    return this.httpCLient.post(`${this.url}/user/education/${id}`, resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  updateEdu(uid: any, eduid: any , resource: any): Observable<any> {
    // console.log("In DataService");
    // console.log(uid, eduid, resource);
    return this.httpCLient.put(`${this.url}/user/${uid}/education/${eduid}` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }


  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(err));
  }
}
