import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewsLetterComponent } from './news-letter/news-letter.component';

const routes: Route[] = [
  { path: '', title: 'Blog', component: NewsLetterComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsLetterRoutingModule {}
