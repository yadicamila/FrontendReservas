import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Nueva forma en Angular 17
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // La nueva forma de proporcionar HttpClient
    provideRouter(routes), provideAnimationsAsync(),
  ]
}).catch(err => console.error(err));