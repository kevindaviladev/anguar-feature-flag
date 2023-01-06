import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureFlagsService } from '../services/feature-flags.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureGuard implements CanLoad {
  constructor(
    private featureFlagsService: FeatureFlagsService,
    private router: Router
  ) {}
  canLoad(route: Route) {
    const {
      data: { feature },
    } = route as any;
    if (feature) {
      const isEnabled = this.featureFlagsService.isFeatureEnabled(feature);
      if (isEnabled) {
        return true;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
}
