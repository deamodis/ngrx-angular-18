import {ActionReducer, createReducer, on} from "@ngrx/store";
import {AuthV2Model} from "./auth-v2.model";
import {LoginApiActions} from "./auth-v2.actions";


export interface AuthV2State {
  accessToken: AuthV2Model | null,
  refreshTokenFailed: boolean,
  error: boolean
}

const initialState: AuthV2State = {
  accessToken: null,
  refreshTokenFailed: false,
  error: false
};

export const authV2Reducer: ActionReducer<AuthV2State> = createReducer(
  initialState,
  on(LoginApiActions.loginSuccess, (state: AuthV2State, { accessToken}) => ({...state, accessToken: { accessToken }})),
  on(LoginApiActions.refreshTokenFailure, (state: AuthV2State) => ({
    ...state,
    refreshTokenFailed: true,
    error: true
  }))
);
