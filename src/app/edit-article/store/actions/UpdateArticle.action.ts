import {createAction, props} from "@ngrx/store";

import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {UpdateArticleRequestInterface} from "../../types/UpdateArticleRequest.interface";
import {ActionTypes} from "../ActionTypes";

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{slug: string; articleRequest: UpdateArticleRequestInterface}>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
