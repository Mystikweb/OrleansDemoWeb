export interface IDeviceSensorUpdate {
  deviceSensorId: number;
  valueUpdated(): void;
}
