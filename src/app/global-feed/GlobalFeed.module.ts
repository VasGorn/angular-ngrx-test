import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {GlobalFeedComponent} from "./components/global-feed/GlobalFeed.component";
import {FeedModule} from "../shared/modules/feed/Feed.module";
import {BannerModule} from "../shared/modules/banner/Banner.module";

const routes: Routes = [
  {
    path: "",
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
