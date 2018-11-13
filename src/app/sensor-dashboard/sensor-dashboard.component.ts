import { Component, Input, OnInit } from '@angular/core';
import { DeviceSensorViewModel } from '../models';

@Component({
  selector: 'app-sensor-dashboard',
  templateUrl: './sensor-dashboard.component.html',
  styleUrls: ['./sensor-dashboard.component.css']
})
export class SensorDashboardComponent implements OnInit {
  @Input() sensor: DeviceSensorViewModel;

  constructor() { }

  ngOnInit() {
  }

}
