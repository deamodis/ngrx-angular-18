import {Routes} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {createFeature, provideState} from "@ngrx/store";
import {tasksFeature} from "./store/tasks.reducers";
// import {booksFeature} from "./store/tasks.state";
// import {booksFeature, tasksReducers} from "./store/tasks.state";

export const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    providers: [
      provideState(tasksFeature),
    ],
    children: [
      {
        path: '',
        loadComponent: () => import('../global-tasks/global-tasks.component').then(m => m.GlobalTasksComponent)
      }
    ]
  }
];
