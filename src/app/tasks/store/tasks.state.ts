// import {TasksListState, tasksReducer} from "./tasks.reducers";
// import {ActionReducerMap} from "@ngrx/store";
//
// export interface TasksState {
//   tasks: TasksListState
// }
//
// export const tasksReducers: ActionReducerMap<TasksState> = {
//   tasks: tasksReducer
// }
// import {createAction, createFeature, createReducer, createSelector, on} from '@ngrx/store';
//  interface Book {
//    id: number;
//    title: string;
//    ratingsCount: number
//  }
//
// // import * as BookListPageActions from './book-list-page.actions';
// const opened = createAction('[Tasks] Opened')
//
// interface State {
//   books: Book[];
//   query: string;
// }
//
// const initialState: State = {
//   books: [],
//   query: '',
// };
//
// export const booksFeature = createFeature({
//   name: 'books1',
//   reducer: createReducer(
//     initialState,
//     on(opened, (state, action) => ({
//       ...state,
//       query: 's',
//     }))
//   ),
//   extraSelectors: ({ selectQuery, selectBooks }) => {
//     const selectFilteredBooks = createSelector(
//       selectQuery,
//       selectBooks,
//       (query, books) => books.filter((book) => book.title.includes(query))
//     );
//     const selectFilteredBooksWithRating = createSelector(
//       selectFilteredBooks,
//       (books) => books.filter((book) => book.ratingsCount >= 1)
//     );
//
//     return { selectFilteredBooks, selectFilteredBooksWithRating };
//   },
// });
