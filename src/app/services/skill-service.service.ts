import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../CustomErrors/notFoundError';
import {AppError} from '../CustomErrors/appError';
import {HttpClient} from '@angular/common/http';
import {SkillsModel} from '../Models/skillsModel';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  url = 'http://localhost:8080/api';

  constructor(private  httpCLient: HttpClient) { }


  // @ts-ignore
  getSkillById(id :any): Observable<any>{
    return this.httpCLient.get(`${this.url}/skills/${id}`).pipe(
      catchError( (err => this.handleError(err)))
    );
  }

  updateSkill(skill: SkillsModel, id :any , uid: any ): Observable<any>{
    return this.httpCLient.put(`${this.url}/user/${uid}/skill/${id}` , skill).pipe(
      catchError( (err => this.handleError(err)))
    );
  }

  deleteSkill(id: any): Observable<any>{
    return this.httpCLient.delete(`${this.url}/skill/${id}`).pipe(
      catchError( (err => this.handleError(err)))
    );
  }

  postSkill(resource: any, id: any): Observable<any>{
    return this.httpCLient.post(`${this.url}/user/skill/${id}` , resource).pipe(
      catchError( (err => this.handleError(err))));
  }


  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(err));
  }

}
