import { Route } from '@angular/router';
import { NewsLetterComponent } from './news-letter/news-letter.component';

export const NewsLetterRoutes: Route[] = [
  { path: '', title: 'NewsLetter', component: NewsLetterComponent },
];
