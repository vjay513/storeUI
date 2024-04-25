// home.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { fetchDataSuccess } from './home.actions';

export interface HomeState {
  data: any;
}

export const initialState: HomeState = {
  data: null
};

export const homeReducer = createReducer(
  initialState,
  on(fetchDataSuccess, (state, { data }) => ({
    ...state,
    data: data
  }))
);
