import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {PopularTagsService} from "./services/PopularTags.service";
import {reducers} from "./store/Reducers";
import {GetPopularTagsEffect} from "./store/effects/GetPopularTags.effect";
import {PopularTagsComponent} from "./components/popular-tags/PopularTags.component";
import {LoadingModule} from "../loading/Loading.module";
import {ErrorMessageModule} from "../error-message/ErrorMessage.module";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("popularTags", reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
