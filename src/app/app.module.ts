import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './service/service.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SensorDashboardComponent } from './sensor-dashboard/sensor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SensorDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
