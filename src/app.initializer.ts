import { APP_INITIALIZER } from "@angular/core";

export function initializeApp() {
  return (): Promise<any> => {
    return Promise.resolve();
  }
}

export const APP_INITIALIZER_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  multi: true,
  deps: [],
}
