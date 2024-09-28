import {ActionReducer, createReducer, on} from "@ngrx/store";
import {UserProfile} from "./user-profile.model";
import {profileLoaded} from "./profile.actions";

export interface UserProfileState {
  profile: UserProfile | null;
}

const initialState: UserProfileState = {
  profile: null
}

export const profileReducers: ActionReducer<UserProfileState> = createReducer(
  initialState,
  on(profileLoaded, (state: UserProfileState, {profile}) => ({...state, profile}))
)
