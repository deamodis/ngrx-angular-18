import {Injectable} from '@angular/core';
import {ComponentStore} from "@ngrx/component-store";
import {concatMap, Observable, tap} from "rxjs";
import {GlobalTasksService} from "./global-tasks.service";

export interface GlobalTasksState {
  tasks: string[];
  preferredTasks: string[];
  tasksPerPage: number;
  currentPageIndex: number;
  pagingTurned: boolean;
}

@Injectable()
export class GlobalTasksStore extends ComponentStore<GlobalTasksState> {

  constructor(private globalTasksService: GlobalTasksService) {
    super({
      tasks: [],
      preferredTasks: [],
      tasksPerPage: 10,
      currentPageIndex: 0,
      pagingTurned: true
    });

    this.fetchTasks(this.fetchTasksData$);
  }

  // *********** Selectors *********** //

  readonly tasks$: Observable<string[]> = this.select(state => state.tasks);

  readonly preferredTasksIds$ = this.select(state => state.preferredTasks);

  readonly preferredTasks$ = this.select(
    this.tasks$,
    this.preferredTasksIds$,
    (tasks: string[], preferredTasksIds: string[]) => tasks.filter(task => preferredTasksIds.includes(task))
  );

  readonly pagingTurned$: Observable<boolean> = this.select(state => state.pagingTurned, {debounce: true});

  readonly tasksPerPage$ = this.select(state => state.tasksPerPage);

  readonly currentPageIndex$ = this.select(state => state.currentPageIndex);

  readonly fetchTasksData$ = this.select({
    tasksPerPage: this.tasksPerPage$,
    currentPageIndex: this.currentPageIndex$
  }, {debounce: true});

  readonly vm$ = this.select({
    tasks: this.tasks$,
    preferredTasksIds: this.preferredTasksIds$,
    preferredTasks: this.preferredTasks$,
    pagingTurned: this.pagingTurned$,
  });

  private updateTasksResult$ = () => {
  };

  // *********** Updaters *********** //

  readonly updateTasksPerPage = this.updater((state, tasksPerPage: number) => ({
    ...state,
    tasksPerPage
  }));

  readonly addTask = this.updater((state, task: string) => ({
    ...state,
    tasks: [...state.tasks, task]
  }));

  readonly turnOffPaging = this.updater((state: GlobalTasksState) => {
    return {
      ...state,
      pagingTurned: false
    }
  });

  readonly turnOnPaging = this.updater((state: GlobalTasksState) => {
    return {
      ...state,
      pagingTurned: true
    }
  });

  readonly updateCurrentPageIndex = this.updater((state, currentPageIndex: number) => ({
    ...state,
    currentPageIndex
  }));

  // *********** Effects *********** //

  private readonly fetchTasks = this.effect(
    (tasksPageData$: Observable<{ tasksPerPage: number, currentPageIndex: number }>) => {
      return tasksPageData$.pipe(
        concatMap(({tasksPerPage, currentPageIndex}) => {
          return this.globalTasksService.loadTasks(tasksPerPage, currentPageIndex).pipe(
            tap(tasks => {
              console.log('fetch data');
              this.updateTasksPerPage(12);
            })
          )
        })
      )
    }
  )


}
