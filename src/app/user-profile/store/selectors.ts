import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserProfileStateInterface} from "../types/UserProfileState.interface";

export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileStateInterface>("UserProfile");

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.error
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: UserProfileStateInterface) => state.data
);
