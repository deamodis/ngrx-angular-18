import {createReducer, on} from "@ngrx/store";
import {User} from './user.model';
import {loginFailure, loginSuccess, logout} from "./auth.actions";

export interface AuthState {
  user: User | null;
  error: boolean
}

const initialState: AuthState = {
  user: null,
  error: false
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {user}) => {
    console.log('reducer login', state ,user);
    return {...state, user}
  }),
  on(logout, state => ({...state, user: null})),
  on(loginFailure, state => ({...state, user: null, error: true}))
)
