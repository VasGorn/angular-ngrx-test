import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {ArticleRequestInterface} from "src/app/shared/types/ArticleRequest.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {createArticleAction} from "../../store/actions/CreateArticle.action";
import {
  isSubmittingSelector,
  validationErrorSelector,
} from "../../store/Selectors";
import {CreateArticleRequestInterface} from "../../types/CreateArticleRequest.interface";

@Component({
  selector: "ant-create-article",
  templateUrl: "./CreateArticle.component.html",
  styleUrls: ["./CreateArticle.component.scss"],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleRequestInterface = {
    title: "",
    description: "",
    body: "",
    tagList: [""],
  };
  isSubmitting$: Observable<boolean> = new Observable();
  backendErrors$: Observable<BackendErrorsInterface | null> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  onSubmit(articleRequest: ArticleRequestInterface): void {
    const createArticleRequest: CreateArticleRequestInterface = {
      article: articleRequest,
    };
    this.store.dispatch(
      createArticleAction({articleRequest: createArticleRequest})
    );
  }
}
