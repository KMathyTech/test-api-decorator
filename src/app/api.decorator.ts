import {NGXLogger} from "ngx-logger";
import {AppInjector} from "./app-injector";

export abstract class APIProperties {
  protected logger!: NGXLogger;
  protected baseAPI!: string;
  constructor(...args: any[]) { }

  protected log() {
    this.logger.log('Test log');
  }
}

interface APIOptions {
  useExternalSources: boolean;
}

const defaultOptions: Partial<APIOptions> = {
  useExternalSources: false
}

type Constructor<T = {}> = new(...args: any[]) => T;

export function API(options: Partial<APIOptions> = defaultOptions) {
  return <TBase extends Constructor<APIProperties>>(Base: TBase) => {
    if (Base instanceof APIProperties) {
      throw new Error('Class should extend APIProperties');
    }
    return class extends Base {
      constructor(...args: any[]) {
        super(...args);
        this.logger = AppInjector.injector.get(NGXLogger);
        this.baseAPI = options.useExternalSources ? 'https://www.google.com' : 'http://localhost:4201';
      }
    }
  }
}
