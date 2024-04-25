// app.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
    items: string[];
}

export const initialState: AppState = {
    items: []
};

export const appReducer = createReducer(
    initialState,
    on(AppActions.addItem, (state, { item }) => ({
        ...state,
        items: [...state.items, item]
    })),
    on(AppActions.removeItem, (state, { index }) => ({
        ...state,
        items: state.items.filter((_, i) => i !== index)
    })),
    on(AppActions.searchItem, (state, { item }) => ({
        ...state, items: state.items.filter((elem, _) => elem !== item)
    }))
);
