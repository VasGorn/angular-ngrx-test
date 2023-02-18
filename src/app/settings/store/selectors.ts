import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SettingsStateInterface} from "../types/SettingsState.interface";

export const settingsFeatureSelector =
  createFeatureSelector<SettingsStateInterface>("settings");

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrorSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
