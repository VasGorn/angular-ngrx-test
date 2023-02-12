import {routerNavigationAction} from "@ngrx/router-store";
import {Action, createReducer, on} from "@ngrx/store";

import {EditArticleStateInterface} from "../types/EditArticleState.interface";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from "./actions/GetArticle.action";
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from "./actions/UpdateArticle.action";

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null,
};

const editArticledReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(routerNavigationAction, (): EditArticleStateInterface => initialState)
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticledReducer(state, action);
}
