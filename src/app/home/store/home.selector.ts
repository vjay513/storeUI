// app.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const seletData = createSelector(
  selectHomeState,
  (state: HomeState) => state.data
);
