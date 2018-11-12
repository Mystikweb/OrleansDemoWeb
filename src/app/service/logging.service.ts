import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logs: Array<string> = [];

  constructor() { }

  add(message: string) {
    console.log(message);
    this.logs.push(message);
  }

  clear() {
    this.logs = [];
  }
}
