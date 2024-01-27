import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Especialidad } from '../models/especialidad.model';

const baseUrl = 'http://localhost:3000/especialidad';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService {
  basePath = 'http://localhost:3000/especialidad';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() =>
      Error('Something happened with request, please try again later')
    );
  }
  getEspecialidad(): Observable<any> {
    console.log('inicia consulta');
    return this.http
      .get<any>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
