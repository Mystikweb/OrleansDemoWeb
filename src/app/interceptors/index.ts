/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoggingInterceptor } from './logging-interceptor';
import { CacheInterceptor } from './cache-interceptor';
import { CrossOriginInterceptor } from './cross-origin-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CrossOriginInterceptor, multi: true }
];
