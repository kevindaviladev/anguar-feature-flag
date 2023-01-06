import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedRoutingModule } from './feed.routing.module';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [FeedRoutingModule],
  declarations: [FeedComponent],
})
export class FeedModule {}
