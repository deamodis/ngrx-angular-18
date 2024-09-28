import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AuthState  } from "./auth.reducers";

export const selectAuthState = (state: AppState) => state.auth;

export const selectUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);