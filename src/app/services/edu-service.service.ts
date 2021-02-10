import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {NotFoundError} from '../CustomErrors/notFoundError';
import {AppError} from '../CustomErrors/appError';
import {EduModel} from '../Models/eduModel';

@Injectable({
  providedIn: 'root'
})
export class EduServiceService {


  url = 'http://localhost:8080/api';
  constructor(private  httpCLient: HttpClient) { }


  getAllEdu(){
    return this.httpCLient.get(`${this.url}/educations/`).pipe( catchError( (err => this.handleError(err))));
  }

  getEdu(id: any): Observable<any>{
    return this.httpCLient.get<EduModel>(`${this.url}/education/${id}`).pipe( catchError( (err => this.handleError(err))));
  }

  postEdu(resource: any, id: any): Observable<any>{
    console.log(`${this.url}/user/education/${id}`);
    return this.httpCLient.post(`${this.url}/user/education/${id}`, resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  updateEdu(uid: any, eduid: any , resource: any): Observable<any> {
    // console.log("In Edu  Service");
    // console.log(uid, eduid, resource);
    return this.httpCLient.put(`${this.url}/user/${uid}/education/${eduid}/` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }

  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(err));
  }
}
