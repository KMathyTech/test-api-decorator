import {Injector} from "@angular/core";

export class AppInjector {
  private static _injector: Injector;

  static set injector(value: Injector) {
    AppInjector._injector = value;
  }

  static get injector() {
    return AppInjector._injector;
  }
}
