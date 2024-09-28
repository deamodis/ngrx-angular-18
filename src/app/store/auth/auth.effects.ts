import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {login, loginFailure, loginSuccess} from "./auth.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {profileLoaded, profileLoadingFailed} from "../profile/profile.actions";

@Injectable()
export class AuthEffect {
  $login = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(() => this.http.get('http://localhost:5151/api/auth')
        .pipe(
          map((user: any) => { console.log(user); return loginSuccess({ user: user })}),
          catchError((error) => of(loginFailure()))
        )
      )
    ))

  $loadProfile = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      switchMap((user) => this.http.get('http://localhost:5151/api/profile')
        .pipe(
          map((profile: any) => profileLoaded({profile: profile})),
          catchError((error: any) => of(profileLoadingFailed()))
        )
      )
    ))

  constructor(private actions$: Actions, private http: HttpClient) {}
}
