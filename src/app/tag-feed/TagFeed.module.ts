import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {FeedModule} from "../shared/modules/feed/Feed.module";
import {BannerModule} from "../shared/modules/banner/Banner.module";
import {PopularTagsModule} from "../shared/modules/popular-tags/PopularTags.module";
import {FeedTogglerModule} from "../shared/modules/feed-toggler/FeedToggler.module";
import {TagFeedComponent} from "./components/tag-feed/TagFeed.component";

const routes: Routes = [
  {
    path: "tags/:slug",
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
