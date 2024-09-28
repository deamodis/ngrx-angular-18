import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {UserProfileState} from "./profile.reducers";

export const selectUserProfileState = (state: AppState) => state.userProfile;

export const selectProfile = createSelector(
  selectUserProfileState,
  (userProfile: UserProfileState ) => userProfile.profile
);
