import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsLetterRoutingModule } from './news-letter.routing.module';

import { NewsLetterComponent } from './news-letter/news-letter.component';

@NgModule({
  imports: [NewsLetterRoutingModule],
  declarations: [NewsLetterComponent],
})
export class NewsLetterModule {}
