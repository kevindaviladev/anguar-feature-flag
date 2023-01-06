import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog.routing.module';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [BlogRoutingModule],
  declarations: [BlogComponent],
})
export class BlogModule {}
