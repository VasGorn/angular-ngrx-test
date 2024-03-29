import {routerNavigationAction} from "@ngrx/router-store";
import {Action, createReducer, on} from "@ngrx/store";
import {ArticleStateInterface} from "../types/ArticleState.interface";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from "./actions/GetArticle.action";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articledReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articledReducer(state, action);
}
