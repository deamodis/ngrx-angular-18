import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {debounceTime, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalTasksService {

  constructor(private http: HttpClient) { }

  loadTasks(tasksPerPage: number, tasksIndex: number): Observable<number> {
    console.log('load tasks');
    return of(1).pipe(debounceTime(5000));
  }
}
