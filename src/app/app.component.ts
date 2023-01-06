import { Component, inject } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { FeatureFlagDirective } from './directives/feature-flag.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'featureFlag';

  router = inject(Router);
}
