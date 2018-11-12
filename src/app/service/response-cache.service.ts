import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { LoggingService } from './logging.service';

export interface CacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void;
}

const maxAge = 30000;

@Injectable({
  providedIn: 'root'
})
export class ResponseCacheService implements RequestCache {
  cache = new Map<string, CacheEntry>();

  constructor(private logger: LoggingService) { }

  get(req: HttpRequest<any>): HttpResponse<any> {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    this.logger.add(`Found ${expired} cached response for ${url}`);

    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.logger.add(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach((entry: CacheEntry) => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });

    this.logger.add(`Request cache size: ${this.cache.size}.`);
  }
}
