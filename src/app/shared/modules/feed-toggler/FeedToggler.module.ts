import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {FeedTogglerComponent} from "./components/feed-toggler/FeedToggler.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  providers: [],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
