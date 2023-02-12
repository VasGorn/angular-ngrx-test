import {createAction, props} from "@ngrx/store";

import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {CreateArticleRequestInterface} from "../../types/CreateArticleRequest.interface";
import {ActionTypes} from "../ActionTypes";

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{articleRequest: CreateArticleRequestInterface}>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
