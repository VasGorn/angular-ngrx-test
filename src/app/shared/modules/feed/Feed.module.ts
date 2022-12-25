import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {FeedComponent} from "./components/feed/Feed.component";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/GetFeed.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/Reducers";
import {FeedService} from "./services/Feed.service";

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature("feed", reducers),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
