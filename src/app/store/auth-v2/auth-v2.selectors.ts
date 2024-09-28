import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {AuthV2State} from "./auth-v2.reducers";

const appState = (state: AppState) => state.authV2;

export const selectAccessToken = createSelector(
  appState,
  (state: AuthV2State) => state.accessToken
)
