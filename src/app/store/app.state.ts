import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer  } from "./auth/auth.reducers";
import { UserProfileState, profileReducers } from "./profile/profile.reducers";
import {authV2Reducer, AuthV2State} from "./auth-v2/auth-v2.reducers";

export interface AppState {
    auth: AuthState;
    authV2: AuthV2State;
    userProfile: UserProfileState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    authV2: authV2Reducer,
    userProfile: profileReducers
}
