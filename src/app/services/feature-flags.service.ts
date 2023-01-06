import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';
import { FeatureConfig } from '../interfaces/feature-flag';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  config: FeatureConfig | null = null;
  configUrl = 'http://localhost:3000/features';

  constructor(private http: HttpClient) {}

  loadConfig() {
    return firstValueFrom(
      this.http
        .get<FeatureConfig>(this.configUrl)
        .pipe(tap((data) => (this.config = data)))
    );
  }

  isFeatureEnabled(key: string): boolean {
    // return this.config && this.config[key] ? this.config[key] : false;
    return this.config?.[key] ?? false;
  }
}
