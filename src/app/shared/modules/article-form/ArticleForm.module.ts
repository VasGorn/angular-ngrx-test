import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {ArticleFormComponent} from "./components/article-form/ArticleForm.component";
import {BackendErrorMessagesModule} from "../backend-error-messages/BackendErrorMessages.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
