// app.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectItems = createSelector(
  selectAppState,
  (state: AppState) => state.items
);
