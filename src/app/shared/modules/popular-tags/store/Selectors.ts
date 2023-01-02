import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PopularTagsStateInterface} from "../types/PopularTagsState.interface";

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>("popularTags");

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
);
