import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {CreateArticleComponent} from "./components/create-article/CreateArticle.component";
import {ArticleFormModule} from "../shared/modules/article-form/ArticleForm.module";

const routes: Routes = [
  {
    path: "articles/new",
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ArticleFormModule],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
