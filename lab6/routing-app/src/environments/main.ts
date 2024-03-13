import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from '../app/home/app.component';
import {environments} from '../environments/polyfills';

if (environments.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));