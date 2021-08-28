import { Injectable } from '@angular/core';
import {API, APIProperties} from "./api.decorator";
import {PersonService} from "./person.service";

@Injectable({ providedIn: 'root' })
@API()
export class EnterpriseService extends APIProperties {
  constructor(private personService: PersonService) {
    super();
  }

  log() {
    this.logger.log('EnterpriseService', this);
  }
}
