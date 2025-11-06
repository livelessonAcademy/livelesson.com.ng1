import {
  bootstrapApplication,
  BootstrapContext,
} from '@angular/platform-browser';
import { App } from './app/app'; // Your root standalone component
import { config } from './app/app.config.server'; // Your server-side application configuration

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(App, config, context);

export default bootstrap;
