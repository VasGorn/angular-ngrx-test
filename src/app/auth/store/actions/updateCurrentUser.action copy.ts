import {createAction, props} from "@ngrx/store";

import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";
import {CurrentUserInterface} from "src/app/shared/types/currentUser.interface";
import {UserUpdateRequestInterface} from "../../types/UserUpdateRequest.interface";
import {ActionTypes} from "../actionTypes";

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{request: UserUpdateRequestInterface}>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
