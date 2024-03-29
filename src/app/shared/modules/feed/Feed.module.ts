import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {FeedComponent} from "./components/feed/Feed.component";
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/GetFeed.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/Reducers";
import {FeedService} from "./services/Feed.service";
import {ErrorMessageModule} from "../error-message/ErrorMessage.module";
import {LoadingModule} from "../loading/Loading.module";
import {PaginationModule} from "../pagination/Pagination.module";
import {TagListModule} from "../tag-list/TagList.module";
import {AddToFavoritesModule} from "../add-to-favorites/AddToFavorites.module";

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature("feed", reducers),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
