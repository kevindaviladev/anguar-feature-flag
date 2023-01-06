import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FeatureFlagDirective } from './directives/feature-flag.directive';
import { FeatureFlagsService } from './services/feature-flags.service';

const featureFactory = (featureFlagsService: FeatureFlagsService) => () =>
  featureFlagsService.loadConfig();

@NgModule({
  declarations: [AppComponent, FeatureFlagDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: featureFactory,
      deps: [FeatureFlagsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
