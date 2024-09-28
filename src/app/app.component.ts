import {Component, OnInit, Signal, WritableSignal, computed, effect, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SimpleView1Component} from './simple-view-1/simple-view-1.component';
import {interval, of} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.state';
import {selectUser} from './store/auth/auth.selectors';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DriveViewerComponent} from "./drive-viewer/drive-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    SimpleView1Component,
    UserComponent,
    DriveViewerComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  counterObservable = interval(1000);

  // private a = of()
  counter = toSignal(this.counterObservable, {initialValue: 0});
  a: WritableSignal<number> = signal(0);
  b: Signal<number> = computed(() => this.a() * 2);

  user$ = this.store.select(selectUser)

  ngOnInit(): void {
  }

  constructor(private store: Store<AppState>) {
    effect(() => {
      console.log(this.a(), this.b())
    });
    // setTimeout(() => {
    //   this.store.select((state: any) => {
    //     return state
    //   }).subscribe((val: any) => {
    //     console.log('val', val)
    //     val.auth.user = 'ded';
    //   });
    // })
  }

  title = 'test-angular-v18';

  customName: string = 'Vlad';

  noCdClick(): void {
    console.log('noCdClick!!!');
  }
}
