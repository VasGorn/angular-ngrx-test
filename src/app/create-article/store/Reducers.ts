import {routerNavigationAction} from "@ngrx/router-store";
import {Action, createReducer, on} from "@ngrx/store";

import {CreateArticleStateInterface} from "../types/CreateArticleState.interface";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from "./actions/CreateArticle.action";

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticledReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(routerNavigationAction, (): CreateArticleStateInterface => initialState)
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticledReducer(state, action);
}
