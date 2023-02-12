import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {filter, map, Observable} from "rxjs";
import {ArticleInterface} from "src/app/shared/types/Article.interface";

import {ArticleRequestInterface} from "src/app/shared/types/ArticleRequest.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {getArticleAction} from "../../store/actions/GetArticle.action";
import {updateArticleAction} from "../../store/actions/UpdateArticle.action";
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorSelector,
} from "../../store/Selectors";
import {UpdateArticleRequestInterface} from "../../types/UpdateArticleRequest.interface";

@Component({
  selector: "ant-edit-article",
  templateUrl: "./EditArticle.component.html",
  styleUrls: ["./EditArticle.component.scss"],
})
export class EditArticleComponent implements OnInit {
  private readonly NOT_INITIALIZED: string = "not initialized";
  public readonly NULL_ARTICLE_REQUEST: ArticleRequestInterface = {
    title: this.NOT_INITIALIZED,
    description: this.NOT_INITIALIZED,
    body: this.NOT_INITIALIZED,
    tagList: [],
  };

  initialValues$: Observable<ArticleRequestInterface> = new Observable();
  isSubmitting$: Observable<boolean> = new Observable();
  isLoading$: Observable<boolean> = new Observable();
  backendErrors$: Observable<BackendErrorsInterface | null> = new Observable();
  slug: string = "";

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchDate();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get("slug") || "";
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        } as ArticleRequestInterface;
      })
    );
  }

  fetchDate() {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  onSubmit(articleRequest: ArticleRequestInterface): void {
    const updateArticleRequest: UpdateArticleRequestInterface = {
      article: articleRequest,
    };
    this.store.dispatch(
      updateArticleAction({
        slug: this.slug,
        articleRequest: updateArticleRequest,
      })
    );
  }
}
