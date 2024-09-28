import {
  ApplicationConfig,
  Injectable,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection
} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {routes} from './app.routes';
import {reducers} from './store/app.state';
import {provideEffects} from '@ngrx/effects';
import {AuthEffect} from './store/auth/auth.effects';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  provideHttpClient, withInterceptorsFromDi
} from "@angular/common/http";
import {AuthV2Effects} from "./store/auth-v2/auth-v2.effects";
import {Observable} from "rxjs";

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting request');
    const token = localStorage.getItem('accessToken');
    const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
    return next.handle(authReq);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideClientHydration(),
    provideExperimentalZonelessChangeDetection(),
    provideStore(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        // strictActionWithinNgZone: true
      },
    }),
    provideStoreDevtools(),
    provideEffects([AuthEffect, AuthV2Effects]),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true
    }
  ]
};


