import {createAction, props} from "@ngrx/store";
import {ArticleInterface} from "src/app/shared/types/Article.interface";
import {GetArticleResponseInterface} from "src/app/shared/types/GetArticleResponse.interface";
import {ActionTypes} from "../ActionTypes";

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: ArticleInterface}>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
