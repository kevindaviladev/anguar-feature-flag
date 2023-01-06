import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const routes: Route[] = [{ path: '', title: 'Blog', component: BlogComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
