import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {YourFeedComponent} from "./components/your-feed/YourFeed.component";
import {FeedModule} from "../shared/modules/feed/Feed.module";
import {BannerModule} from "../shared/modules/banner/Banner.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/PopularTags.module";
import {FeedTogglerModule} from "../shared/modules/feed-toggler/FeedToggler.module";

const routes: Routes = [
  {
    path: "feed",
    component: YourFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
