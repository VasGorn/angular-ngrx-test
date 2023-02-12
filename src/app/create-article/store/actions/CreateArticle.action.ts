import {createAction, props} from "@ngrx/store";

import {AddArticleRequestInterface} from "src/app/shared/types/AddArticleRequest.interface";
import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {ActionTypes} from "../ActionTypes";

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{articleRequest: AddArticleRequestInterface}>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
