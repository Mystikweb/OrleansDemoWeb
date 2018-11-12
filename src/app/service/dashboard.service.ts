import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { LoggingService } from './logging.service';
import { DeviceViewModel } from '../models';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient,
    private logger: LoggingService) { }

  getDevices(): Observable<DeviceViewModel[]> {
    const getDashboardRequestUrl = `${environment.runtimeUri}/dashboard`;
    return this.httpClient.get<DeviceViewModel[]>(getDashboardRequestUrl)
      .pipe(
        tap(results => this.logger.add(`Retrieved ${results.length} devices.`)),
        catchError(this.handleError('get', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      this.logger.add(error);
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
