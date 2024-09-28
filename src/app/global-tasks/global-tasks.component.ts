import {Component, OnInit} from '@angular/core';
import {GlobalTasksStore} from "./global-tasks.store";
import {BehaviorSubject, Observable, take} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-global-tasks',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './global-tasks.component.html',
  styleUrl: './global-tasks.component.scss',
  providers: [GlobalTasksStore]
})
export class GlobalTasksComponent implements OnInit {

  vm$ = this.globalTasksStore.vm$;
  test$$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  test$: Observable<number> = this.test$$.asObservable();

  pagingTurned$ = this.globalTasksStore.pagingTurned$;

  pagingTurnedSequenceOfValue: Array<boolean> = [];

  constructor(private readonly globalTasksStore: GlobalTasksStore, private http: HttpClient) {
    setTimeout(() => {
      this.test$$.next(3);
    }, 5000);



    // this.pagingTurned$.pipe(take(1)).subscribe((val) => {
    //   console.log('test')
    //
    //   this.globalTasksStore.turnOnPaging();
    // })
    //
    // this.pagingTurned$.pipe(take(1)).subscribe((val) => {
    //   console.log('test')
    //
    //   this.globalTasksStore.turnOffPaging();
    // })
  }

  getPagingTurnedSequenceOfValue = () => {
    this.globalTasksStore.state$.subscribe((val) => {
      console.log('val', val)
    })

  }
  ngOnInit() {
    this.pagingTurned$.subscribe((val) => {
      console.log('main subscription')

      this.pagingTurnedSequenceOfValue.push(val);
    });
    console.log('go');
    this.pagingTurned$.pipe(take(1)).subscribe((val) => {
      console.log('sub subscription')
      this.globalTasksStore.state$.subscribe((val) => {
        console.log('val', val)
      })
      this.globalTasksStore.turnOffPaging();

      // setTimeout(() => {

      // }, 3000)
    })
  }

  // updateTask(): void {
  //   this.glo
  // }
}
