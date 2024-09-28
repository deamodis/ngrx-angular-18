import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const login = createAction('[Auth] Login', props<{user: User}>());
export const loginSuccess = createAction('[Auth] Login Success', props<{user: User}>());
export const loginFailure = createAction('[Auth] Login Failure');
export const logout = createAction('[Auth] Logout');
