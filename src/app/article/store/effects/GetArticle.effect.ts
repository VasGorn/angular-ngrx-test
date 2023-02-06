import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {ArticleService as SharedArticleService} from "src/app/shared/services/Article.service";
import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from "../actions/GetArticle.action";

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article});
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) {}
}
