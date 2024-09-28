import {createAction, createFeature, createReducer, createSelector, on} from "@ngrx/store";

export interface TasksListState {
  tasks: number[];
  ids: number[]
  opened: boolean;
}

const initialState: TasksListState = {
  tasks: [],
  ids: [],
  opened: false
}

const opened = createAction('[Tasks] Opened')

export const tasksReducer = createReducer(
  initialState,
  on(opened, (state: TasksListState) => ({...state, opened: true}))
)

export const tasksFeature = createFeature({
  name: 'tasks',
  reducer: tasksReducer,
  extraSelectors: ({selectTasks, selectIds, selectOpened, selectTasksState}) => {

    const selectFilteredBooks = createSelector(
      selectTasks,
      selectIds,
      (tasks, ids) => tasks.filter((task: number) => ids.indexOf(task) != -1)
    );

    return { selectFilteredBooks };
  }
})
