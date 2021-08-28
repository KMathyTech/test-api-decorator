import { Injectable } from '@angular/core';
import {API, APIProperties} from "./api.decorator";

@Injectable()
@API({ useExternalSources: true })
export class VehicleService extends APIProperties {
  log() {
    this.logger.info(VehicleService.name, this);
  }
}
