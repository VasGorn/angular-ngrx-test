import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {ArticleComponent} from "./components/article/Article.component";
import {ArticleService as SharedArticleService} from "../shared/services/Article.service";
import {ErrorMessageModule} from "../shared/modules/error-message/ErrorMessage.module";
import {GetArticleEffect} from "./store/effects/GetArticle.effect";
import {reducers} from "./store/Reducers";
import {LoadingModule} from "../shared/modules/loading/Loading.module";
import {TagListModule} from "../shared/modules/tag-list/TagList.module";
import {ArticleService} from "./services/article.service";
import {DeleteArticleEffect} from "./store/effects/DeleteArticle.effect";

const routes: Routes = [
  {
    path: "articles/:slug",
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature("article", reducers),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
