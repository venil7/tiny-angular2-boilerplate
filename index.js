import 'zone.js';
import 'reflect-metadata';

import { MyComponent } from './mycomponent';
import { bootstrap } from 'angular2/angular2';

class Main {
  constructor() {
    bootstrap(MyComponent);
  }
}

new Main();