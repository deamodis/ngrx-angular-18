import {createAction, props} from "@ngrx/store";
import {UserProfile} from "./user-profile.model";

export const profileLoaded = createAction('[Profile] Loading success', props<{profile: UserProfile}>());
export const profileLoadingFailed = createAction('[Profile] Loading failed');
