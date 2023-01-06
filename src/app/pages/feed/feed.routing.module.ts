import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Route[] = [{ path: '', title: 'Blog', component: FeedComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
