import {routerNavigationAction} from "@ngrx/router-store";
import {Action, createReducer, on} from "@ngrx/store";
import {UserProfileStateInterface} from "../types/UserProfileState.interface";
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from "./actions/getUserProfile.action";

const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): UserProfileStateInterface => initialState)
);

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
