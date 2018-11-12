import { Injectable } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import { RequestCache, ResponseCacheService } from '../service/response-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: ResponseCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.canCache(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);

    if (req.headers.get('x-refresh')) {
      const results$ = this.sendRequest(req, next, this.cache);
      return cachedResponse ?
        results$
          .pipe(
            startWith(cachedResponse)
          ) : results$;
    }

    return cachedResponse ?
      of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  private canCache(req: HttpRequest<any>): boolean {
    return req.method === 'GET';
  }

  private sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.put(req, event); // Update the cache.
        }
      })
    );
  }
}
