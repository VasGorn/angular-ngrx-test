import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {ArticleFormModule} from "../shared/modules/article-form/ArticleForm.module";
import {EditArticleService} from "./services/EditArticle.service";
import {ArticleService as SharedArticleService} from "../shared/services/Article.service";
import {UpdateArticleEffect} from "./store/effects/UpdateArticle.effect";
import {GetArticleEffect} from "./store/effects/GetArticle.effect";
import {reducers} from "./store/Reducers";
import {EditArticleComponent} from "./components/edit-article/EditArticle.component";
import {LoadingModule} from "../shared/modules/loading/Loading.module";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/BackendErrorMessages.module";

const routes: Routes = [
  {
    path: "articles/:slug/edit",
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature("update-article", reducers),
    LoadingModule,
    BackendErrorMessagesModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
