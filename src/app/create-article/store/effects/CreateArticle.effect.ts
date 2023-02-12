import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {CreateArticleService} from "../../services/CreateArticle.service";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from "../actions/CreateArticle.action";

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleRequest}) => {
        return this.createArticleService.createArticle(articleRequest).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({article: article});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(["/articles", article.slug]);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
