import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoggingService } from './logging.service';
import { ResponseCacheService } from './response-cache.service';
import { httpInterceptorProviders } from '../interceptors';

import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    ResponseCacheService,
    httpInterceptorProviders,
    DashboardService
  ]
})
export class ServiceModule { }
