import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthV2Model} from "./auth-v2.model";
import {LoginApiActions, LoginPageActions} from "./auth-v2.actions";



@Injectable()
export class AuthV2Effects {
  $login = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginPageActions.login),
        switchMap((creds: { username: string, password: string }) => {
          return this.http.post<AuthV2Model>("http://localhost:5151/api/account/login", {
            UserName: creds.username,
            Password: creds.password
          }, {withCredentials: true})
            .pipe(
              tap((authModel: AuthV2Model) => {
                localStorage.setItem("accessToken", authModel.accessToken)
              }),
              map((authModel: AuthV2Model) => {
                return LoginApiActions.loginSuccess(authModel);
              })
            )
        })
      )
    }
  )

  $refreshToken = createEffect(() =>
    this.actions$
      .pipe(
        ofType(LoginPageActions.refreshToken),
        switchMap(() => this.http.post('http://localhost:5151/api/account/refresh-token', null,
          {withCredentials: true})
          .pipe(
            tap((_: any): void => {
              console.log("refresh token successful")
            }),
            map(() => LoginApiActions.refreshTokenSuccess()),
            catchError((error: any) => of(LoginApiActions.refreshTokenFailure()))
          ))
      )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
