import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FeatureGuard } from './guards/feature.guard';

const routes: Route[] = [
  {
    path: 'feed',
    loadChildren: () =>
      import('./pages/feed/feed.module').then((m) => m.FeedModule),
    canLoad: [FeatureGuard],
    data: {
      feature: 'feed',
    },
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
    canLoad: [FeatureGuard],
    data: {
      feature: 'blog',
    },
  },
  {
    path: 'newsletter',
    loadChildren: () =>
      import('./pages/newsletter/news-letter.module').then(
        (m) => m.NewsLetterModule
      ),
    canLoad: [FeatureGuard],
    data: {
      feature: 'newsletter',
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
