import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FeedComponent} from "./components/feed/Feed.component";

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule],
  exports: [FeedComponent],
})
export class FeedModule {}
