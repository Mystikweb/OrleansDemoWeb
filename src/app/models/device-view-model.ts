import { DeviceSensorViewModel } from './device-sensor-view-model';
import { DeviceEventTypeViewModel } from './device-event-type-view-model';
import { DeviceStateViewModel } from './device-state-view-model';

export class DeviceViewModel {
  deviceId: string;
  name: string;
  isEnabled: boolean;
  sensors: Array<DeviceSensorViewModel>;
  eventTypes: Array<DeviceEventTypeViewModel>;
  states: Array<DeviceStateViewModel>;
}
