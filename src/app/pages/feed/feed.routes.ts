import { Route } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

export const FeedRoutes: Route[] = [
  { path: '', title: 'Feed', component: FeedComponent },
];
