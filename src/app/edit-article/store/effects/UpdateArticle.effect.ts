import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";

import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {EditArticleService} from "../../services/EditArticle.service";
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from "../actions/UpdateArticle.action";

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({slug, articleRequest}) => {
        return this.editArticleService.updateArticle(slug, articleRequest).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({article: article});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateArticleFailureAction({errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({article}) => {
          this.router.navigate(["/articles", article.slug]);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
