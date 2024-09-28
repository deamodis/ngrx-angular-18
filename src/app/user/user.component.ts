import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { User } from '../store/auth/user.model';
import {Observable, tap} from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/auth/auth.selectors';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../store/profile/user-profile.model';
import { selectProfile } from "../store/profile/profile.selectors";
import {LoginPageActions} from "../store/auth-v2";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user$: Observable<User | null>;
  profile$: Observable<UserProfile | null>;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
    this.user$ = this.store.select(selectUser).pipe(
      tap(user => { if (user != null) { console.log('test', user); user.name = 'Ded moroz'; this.cd.markForCheck(); this.cd.detectChanges()} }),
    );


    this.profile$ = this.store.select(selectProfile);
  }

  login(): void {
    this.store.dispatch(LoginPageActions.login({username: "deamod1s", password: "nagato228"}));
  }

  refreshToken(): void {
    this.store.dispatch(LoginPageActions.refreshToken())
  }
}
