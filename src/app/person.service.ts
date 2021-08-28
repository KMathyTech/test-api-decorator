import { Injectable } from '@angular/core';
import {API, APIProperties} from "./api.decorator";
import {VehicleService} from "./vehicle.service";

@Injectable({ providedIn: 'root' })
@API()
export class PersonService extends APIProperties {
  constructor(private vehicleService: VehicleService) {
    super();
  }

  log() {
    this.logger.info(PersonService.name, this)
  }
}
