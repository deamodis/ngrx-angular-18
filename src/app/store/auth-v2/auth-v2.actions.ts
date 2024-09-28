import {createActionGroup, emptyProps, props} from "@ngrx/store";

export const LoginPageActions = createActionGroup({
  source: 'Login Page',
  events: {
    login: props<{ username: string, password: string }>(),
    refreshToken: emptyProps()
  }
});

export const LoginApiActions = createActionGroup({
  source: 'Login API',
  events: {
    loginSuccess: props<{ accessToken: string }>(),
    refreshTokenSuccess: emptyProps(),
    refreshTokenFailure: emptyProps()
  }
});

export const {
  loginSuccess,
  refreshTokenSuccess,
  refreshTokenFailure
} = LoginApiActions;

export const {
  login,
  refreshToken
} = LoginPageActions;
