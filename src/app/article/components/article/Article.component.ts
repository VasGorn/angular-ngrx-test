import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {combineLatest, map, Observable, Subscription} from "rxjs";
import {currentUserSelector} from "src/app/auth/store/selectors";
import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {deleteArticleAction} from "../../store/actions/DeleteArticle.action";
import {getArticleAction} from "../../store/actions/GetArticle.action";
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from "../../store/Selectors";

@Component({
  selector: "ant-feed",
  templateUrl: "./Article.component.html",
  styleUrls: ["./Article.component.scss"],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string = "slug not initialized in article component";
  article: ArticleInterface | null = null;
  articleSubscription: Subscription = new Subscription();
  isLoading$: Observable<boolean> = new Observable();
  error$: Observable<string | null> = new Observable();
  isAuthor$: Observable<boolean> = new Observable();

  constructor(private store: Store, private route: ActivatedRoute) {}

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}));
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug =
      this.route.snapshot.paramMap.get("slug") ||
      "slug not found in article component";
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        }
      )
    );
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }
}
