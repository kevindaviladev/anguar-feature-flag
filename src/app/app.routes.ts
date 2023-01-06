import { Routes } from '@angular/router';
import { FeatureGuard } from './guards/feature.guard';

export const appRoutes: Routes = [
  {
    path: 'feed',
    canLoad: [FeatureGuard],
    loadChildren: () =>
      import('./pages/feed/feed.routes').then((routes) => routes.FeedRoutes),
    data: {
      feature: 'feed',
    },
  },
  {
    path: 'blog',
    canLoad: [FeatureGuard],
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((routes) => routes.BlogRoutes),
    data: {
      feature: 'blog',
    },
  },
  {
    path: 'newsletter',
    canLoad: [FeatureGuard],
    loadChildren: () =>
      import('./pages/newsletter/news-letter.routes').then(
        (routes) => routes.NewsLetterRoutes
      ),
    data: {
      feature: 'newsletter',
    },
  },
];
