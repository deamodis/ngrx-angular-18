import { Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {WebShellComponent} from "./web-shell/web-shell.component";

export const routes: Routes = [
  {
    path: '',
    component: WebShellComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
    ]
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.routes').then(m => m.routes)
  },
];
