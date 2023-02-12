import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {CreateArticleComponent} from "./components/create-article/CreateArticle.component";
import {ArticleFormModule} from "../shared/modules/article-form/ArticleForm.module";
import {CreateArticleService} from "./services/CreateArticle.service";
import {CreateArticleEffect} from "./store/effects/CreateArticle.effect";
import {reducers} from "./store/Reducers";

const routes: Routes = [
  {
    path: "articles/new",
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature("create-article", reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
