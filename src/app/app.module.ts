import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger'

import {AppComponent} from './app.component';
import {AppInjector} from "./app-injector";
import {PersonService} from "./person.service";
import {EnterpriseService} from "./enterprise.service";
import {VehicleService} from "./vehicle.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector
  }
}
