import {createFeatureSelector, createSelector} from "@ngrx/store";

import {CreateArticleStateInterface} from "../types/CreateArticleState.interface";

export const createArticleFeatureSelector =
  createFeatureSelector<CreateArticleStateInterface>("create-article");

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
);
