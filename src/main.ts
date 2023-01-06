import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FeatureFlagsService } from './app/services/feature-flags.service';

const featureFactory = (featureFlagsService: FeatureFlagsService) => () =>
  featureFlagsService.loadConfig();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: featureFactory,
      deps: [FeatureFlagsService],
      multi: true,
    },
  ],
});
